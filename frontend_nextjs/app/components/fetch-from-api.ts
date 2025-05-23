import { EndpointByMethod, EndpointParameters } from "./api-types.ts";
import { z, ZodNever } from "zod";
import { backendUrl } from "@/app/nextjs-demo-config.tsx";

function replacePlaceholders(
  text: string,
  values: { [key: string]: unknown },
): string {
  return text.replace(/{(\w+)}/g, (_, key) => {
    return String(values[key]) || "";
  });
}

const recipifyBackend = process.env.RECIPIFY_BACKEND ?? backendUrl;
console.log("Recipify Backend", recipifyBackend);

const runningOnServer = () => typeof window === "undefined";

// backend
function resolveUrl(path: string, params: EndpointParameters | undefined) {
  let url = "";
  if (runningOnServer()) {
    // on serverside we use the "direct" URL of the backend
    // Note that this code is also executed when resolveUrl is called from
    // a client component (!) => while SSR'ing the client component
    url = `${recipifyBackend}${path}`;
  } else {
    // on client side we use Next.js as a "proxy", so we can specify
    // relative URLs
    // (see 'rewrites' in next.config)
    url = `/backend${path}`;
  }

  if (!params) {
    return url;
  }

  const resolvedUrl =
    params.path !== undefined ? replacePlaceholders(url, params.path) : url;

  const query = "query" in params ? params.query : undefined;

  if (!query) {
    return resolvedUrl;
  }

  const searchParams = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, value.toString());
    }
  });

  // console.log("URL", `${resolvedUrl}?${searchParams.toString()}`);

  return `${resolvedUrl}?${searchParams.toString()}`;
}

type ValuesOfType<T> = T extends { [K: string]: infer U } ? U : never;
type Endpoints = ValuesOfType<ValuesOfType<EndpointByMethod>>;

export async function fetchFromApi<EP extends Endpoints>(
  endpoint: EP,
  params: EP["parameters"] extends ZodNever
    ? undefined
    : z.infer<EP["parameters"]>,
  tags?: string[],
): Promise<z.infer<EP["response"]>> {
  // make sure given params match expectations from backend

  const validatedParams = params ? endpoint.parameters.parse(params) : params;

  // replace variables and add url search params
  const url = resolveUrl(endpoint.path.value, validatedParams);

  const payload = validatedParams
    ? "body" in validatedParams
      ? JSON.stringify(validatedParams.body)
      : undefined
    : undefined;

  const nextTags = tags ? { next: { tags } } : {};

  return fetch(url, {
    method: endpoint.method.value,
    headers: {
      "content-type": "application/json",
    },
    body: payload,
    ...nextTags,
  })
    .then((response) => response.json())
    .then((unknownResponse) => {
      // make sure response returned from server is valid according
      // to schema
      const validatedResponse = endpoint.response.parse(unknownResponse);
      return validatedResponse;
    });
}

export async function fetchNullableFromApi<EP extends Endpoints>(
  endpoint: EP,
  params: EP["parameters"] extends ZodNever
    ? undefined
    : z.infer<EP["parameters"]>,
  tags?: string[],
): Promise<z.infer<EP["response"]> | null> {
  // make sure given params match expectations from backend

  const validatedParams = params ? endpoint.parameters.parse(params) : params;

  // replace variables and add url search params
  const url = resolveUrl(endpoint.path.value, validatedParams);

  const payload = validatedParams
    ? "body" in validatedParams
      ? JSON.stringify(validatedParams.body)
      : undefined
    : undefined;

  const nextTags = tags ? { next: { tags } } : {};

  const response = await fetch(url, {
    method: endpoint.method.value,
    headers: {
      "content-type": "application/json",
    },
    body: payload,
    ...nextTags,
  });

  console.log("RESPONSE STATUS", url, response.status, response.statusText);

  if (response.status === 404) {
    return null;
  }

  return response.json().then((unknownResponse) => {
    // make sure response returned from server is valid according
    // to schema
    const validatedResponse = endpoint.response.parse(unknownResponse);
    return validatedResponse;
  });
}

/**
 * Typesafe access of endpoints
 */
export function getEndpointConfig<
  M extends keyof EndpointByMethod,
  P extends keyof EndpointByMethod[M],
>(m: M, p: P): EndpointByMethod[M][P] {
  return EndpointByMethod[m][p];
}

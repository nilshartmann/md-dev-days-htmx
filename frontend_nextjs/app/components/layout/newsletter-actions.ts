"use server";

import {
  fetchFromApi,
  getEndpointConfig,
} from "@/app/components/fetch-from-api.ts";
import { slowDown_SubscribeNewsletter } from "@/app/nextjs-demo-config.tsx";

// Dieser Code wird auf dem SERVER ausgeführt
//  Next.js stellt dazu implizit einen HTTP Endpunkt zur Verfügung
export async function subscribeToNewsletter(email: string) {
  return fetchFromApi(getEndpointConfig("post", "/api/newsletter/subscribe"), {
    body: { email },
    query: {
      slowdown: slowDown_SubscribeNewsletter,
    },
  });
}

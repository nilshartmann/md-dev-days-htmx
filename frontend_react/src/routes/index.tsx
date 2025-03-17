import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import SearchPage from "./-components/SearchPage.tsx";

const SearchPageParams = z.object({
  search: z.string().optional(),
});

export const Route = createFileRoute("/")({
  component: SearchPage,
  validateSearch: (s) => SearchPageParams.parse(s),
});

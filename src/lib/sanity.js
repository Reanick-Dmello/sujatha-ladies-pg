import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "skoz7mue",
  dataset: "production",
  apiVersion: "2025-07-01",
  useCdn: false,
});

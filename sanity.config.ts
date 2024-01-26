import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "fap73ctz",
  dataset: "production",
  useCdn: false,
  title: "My Personal Website",
  apiVersion: "2023-11-08",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;

export enum ENDPIONTS {
  Profiles = "Profiles",
  Auth = "auth/login",
  Users = "users",
  Blog = "blog",
}

export const BASEURL =
  import.meta.env.VITE_BASE_URL || "https://api.somaliswhocode.com/api";

export const CONFIG = {
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET || "production",
  apiVersion: import.meta.env.VITE_API_VERSION || "2023-15-5",
  token: import.meta.env.VITE_TOKEN,
};

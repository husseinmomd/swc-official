import { createClient, ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { CONFIG } from "./config";

const config: ClientConfig = {
  projectId: CONFIG.projectId,
  dataset: CONFIG.dataset,
  token: CONFIG.token, // Optional, if you need write access
  useCdn: true, // Set to true for production
};

const client = createClient(config);

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

export default client;

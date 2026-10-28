import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://deccanmint.com/", changeFrequency: "monthly", priority: 1 },
    { url: "https://deccanmint.com/privacy", changeFrequency: "yearly", priority: 0.2 },
    { url: "https://deccanmint.com/credits", changeFrequency: "yearly", priority: 0.1 },
  ];
}

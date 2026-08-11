import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zedrolabs.io";
  const now = new Date();

  const routes = [
    { url: "/",           priority: 1.0,  changeFrequency: "weekly"  },
    { url: "/about",      priority: 0.8,  changeFrequency: "monthly" },
    { url: "/services",   priority: 0.9,  changeFrequency: "weekly"  },
    { url: "/portfolio",  priority: 0.75, changeFrequency: "monthly" },
    { url: "/contact",    priority: 0.8,  changeFrequency: "monthly" },
  ] as const;

  return routes.map((r) => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

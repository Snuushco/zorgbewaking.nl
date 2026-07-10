import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { seoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zorgbewaking.nl";

  const staticRoutes = [
    "",
    "/diensten",
    "/diensten/ziekenhuisbeveiliging",
    "/diensten/verpleeghuisbeveiliging",
    "/diensten/ggz-beveiliging",
    "/diensten/azc-beveiliging",
    "/diensten/thuiszorg-beveiliging",
    "/over-ons",
    "/blog",
    "/privacy",
    "/voorwaarden",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const seoLandingRoutes = seoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(page.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...seoLandingRoutes];
}

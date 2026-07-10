import seoPagesData from "./seo-pages-data.json";

export type SeoPageKind = "regional" | "intent";

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoContentSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface SeoPage {
  slug: string;
  kind: SeoPageKind;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  hero: string;
  canonical: string;
  updatedAt: string;
  areaServed: string[];
  intent: string;
  riskContext: string;
  approach: string[];
  deliverables: string[];
  sections: SeoContentSection[];
  faqs: SeoFaq[];
  relatedSlugs: string[];
}

export const seoPages = seoPagesData as SeoPage[];

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages.find((page) => page.slug === slug);
}

export function getRelatedSeoPages(page: SeoPage): SeoPage[] {
  return page.relatedSlugs
    .map((slug) => getSeoPage(slug))
    .filter((related): related is SeoPage => Boolean(related));
}

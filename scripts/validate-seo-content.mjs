import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "lib", "seo-pages-data.json");

const REQUIRED_REGIONAL_SLUGS = new Set([
  "zorgbeveiliging-limburg",
  "zorgbeveiliging-maastricht",
  "zorgbeveiliging-heerlen",
  "zorgbeveiliging-sittard-geleen",
  "zorgbeveiliging-roermond",
  "zorgbeveiliging-venlo",
  "zorgbeveiliging-weert",
]);

const REQUIRED_INTENT_SLUGS = new Set([
  "beveiliging-zorginstelling",
  "beveiliging-ziekenhuis",
  "beveiliging-ggz",
  "beveiliging-verpleeghuis",
  "agressiepreventie-zorg",
  "de-escalerende-beveiliging",
  "security-host-zorglocatie",
  "nachtbeveiliging-zorginstelling",
  "toegangscontrole-zorg",
]);

const errors = [];
const warnings = [];

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s-]/g, " ");
}

function tokensFor(page) {
  const text = [
    page.title,
    page.description,
    page.h1,
    page.hero,
    page.intent,
    page.riskContext,
    ...(page.approach ?? []),
    ...(page.deliverables ?? []),
    ...(page.sections ?? []).flatMap((section) => [
      section.heading,
      section.body,
      ...(section.bullets ?? []),
    ]),
    ...(page.faqs ?? []).flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");

  const stopWords = new Set([
    "aan",
    "als",
    "bij",
    "dan",
    "dat",
    "de",
    "door",
    "een",
    "en",
    "er",
    "het",
    "in",
    "is",
    "kan",
    "met",
    "niet",
    "of",
    "om",
    "op",
    "te",
    "tot",
    "van",
    "voor",
    "wordt",
    "zijn",
    "zorg",
    "zorglocatie",
    "zorglocaties",
    "beveiliging",
    "zorgbeveiliging",
  ]);

  return new Set(
    normalizeText(text)
      .split(/\s+/)
      .filter((token) => token.length > 3 && !stopWords.has(token)),
  );
}

function jaccard(left, right) {
  const intersection = [...left].filter((token) => right.has(token)).length;
  const union = new Set([...left, ...right]).size;
  return union === 0 ? 0 : intersection / union;
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle];
}

function requireString(page, field, minLength = 1) {
  if (typeof page[field] !== "string" || page[field].trim().length < minLength) {
    errors.push(`${page.slug ?? "<missing slug>"}: ${field} is verplicht en moet minimaal ${minLength} tekens hebben`);
  }
}

function requireStringArray(page, field, minItems, minItemLength = 8) {
  if (
    !Array.isArray(page[field]) ||
    page[field].length < minItems ||
    page[field].some((item) => typeof item !== "string" || item.trim().length < minItemLength)
  ) {
    errors.push(`${page.slug}: ${field} moet minimaal ${minItems} inhoudelijke items bevatten`);
  }
}

const raw = await readFile(sourcePath, "utf8");
const pages = JSON.parse(raw);

if (!Array.isArray(pages)) {
  errors.push("seo-pages-data.json moet een array zijn");
}

const bySlug = new Map();
const uniqueFields = new Map([
  ["slug", new Map()],
  ["title", new Map()],
  ["canonical", new Map()],
  ["intent", new Map()],
]);

for (const page of pages) {
  for (const [field, seen] of uniqueFields) {
    const value = page[field];
    if (typeof value !== "string" || value.trim() === "") {
      errors.push(`${page.slug ?? "<missing slug>"}: ${field} ontbreekt`);
      continue;
    }
    if (seen.has(value)) {
      errors.push(`${field} is niet uniek: "${value}" bij ${seen.get(value)} en ${page.slug}`);
    }
    seen.set(value, page.slug);
  }

  if (typeof page.slug === "string") {
    bySlug.set(page.slug, page);
  }

  requireString(page, "description", 90);
  requireString(page, "h1", 8);
  requireString(page, "hero", 180);
  requireString(page, "updatedAt", 10);
  requireString(page, "riskContext", 160);
  requireStringArray(page, "areaServed", page.kind === "regional" ? 2 : 1, 2);
  requireStringArray(page, "approach", 4);
  requireStringArray(page, "deliverables", 4);
  requireStringArray(page, "relatedSlugs", 3);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(page.updatedAt ?? "")) {
    errors.push(`${page.slug}: updatedAt moet YYYY-MM-DD zijn`);
  }

  if (page.canonical !== `https://zorgbewaking.nl/${page.slug}`) {
    errors.push(`${page.slug}: canonical moet de zorgbewaking.nl slug volgen`);
  }

  if (!Array.isArray(page.sections) || page.sections.length < 3) {
    errors.push(`${page.slug}: sections moet minimaal 3 secties bevatten`);
  } else {
    page.sections.forEach((section, index) => {
      if (typeof section.heading !== "string" || section.heading.length < 8) {
        errors.push(`${page.slug}: sections[${index}].heading is te dun`);
      }
      if (typeof section.body !== "string" || section.body.length < 120) {
        errors.push(`${page.slug}: sections[${index}].body is te dun`);
      }
    });
  }

  if (!Array.isArray(page.faqs) || page.faqs.length < 3) {
    errors.push(`${page.slug}: faqs moet minimaal 3 vragen bevatten`);
  } else {
    page.faqs.forEach((faq, index) => {
      if (typeof faq.question !== "string" || faq.question.length < 12) {
        errors.push(`${page.slug}: faqs[${index}].question is te dun`);
      }
      if (typeof faq.answer !== "string" || faq.answer.length < 50) {
        errors.push(`${page.slug}: faqs[${index}].answer is te dun`);
      }
    });
  }
}

for (const slug of REQUIRED_REGIONAL_SLUGS) {
  if (!bySlug.has(slug)) {
    errors.push(`verplichte regionale slug ontbreekt: ${slug}`);
  } else if (bySlug.get(slug).kind !== "regional") {
    errors.push(`${slug}: kind moet regional zijn`);
  }
}

for (const slug of REQUIRED_INTENT_SLUGS) {
  if (!bySlug.has(slug)) {
    errors.push(`verplichte intentie-slug ontbreekt: ${slug}`);
  } else if (bySlug.get(slug).kind !== "intent") {
    errors.push(`${slug}: kind moet intent zijn`);
  }
}

for (const page of pages) {
  for (const relatedSlug of page.relatedSlugs ?? []) {
    if (!bySlug.has(relatedSlug)) {
      errors.push(`${page.slug}: relatedSlug bestaat niet: ${relatedSlug}`);
    }
    if (relatedSlug === page.slug) {
      errors.push(`${page.slug}: relatedSlug verwijst naar zichzelf`);
    }
  }
}

const tokenSets = new Map(pages.map((page) => [page.slug, tokensFor(page)]));
const regionalPages = pages.filter((page) => page.kind === "regional");
const regionalSimilarities = [];

for (let i = 0; i < pages.length; i += 1) {
  for (let j = i + 1; j < pages.length; j += 1) {
    const left = pages[i];
    const right = pages[j];
    const score = jaccard(tokenSets.get(left.slug), tokenSets.get(right.slug));
    if (score >= 0.55) {
      warnings.push(`hoge similarity ${score.toFixed(3)}: ${left.slug} <-> ${right.slug}`);
    }
  }
}

for (let i = 0; i < regionalPages.length; i += 1) {
  for (let j = i + 1; j < regionalPages.length; j += 1) {
    regionalSimilarities.push(
      jaccard(tokenSets.get(regionalPages[i].slug), tokenSets.get(regionalPages[j].slug)),
    );
  }
}

const regionalMedian = median(regionalSimilarities);
if (regionalMedian >= 0.35) {
  errors.push(`regionale mediane token-set Jaccard is ${regionalMedian.toFixed(3)}, moet onder 0.350`);
}

for (const warning of warnings) {
  console.warn(`SEO content warning: ${warning}`);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`SEO content error: ${error}`);
  }
  process.exit(1);
}

console.log(`SEO content valid: ${pages.length} pagina's, regionale mediane Jaccard ${regionalMedian.toFixed(3)}`);

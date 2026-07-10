import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRelatedSeoPages, getSeoPage, seoPages } from "@/lib/seo-pages";

interface Props {
  params: Promise<{ slug: string }>;
}

const baseUrl = "https://zorgbewaking.nl";

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return { title: "Niet gevonden" };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.canonical,
      type: "website",
      locale: "nl_NL",
      siteName: "Zorgbewaking.nl",
    },
  };
}

export default async function SeoLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const relatedPages = getRelatedSeoPages(page);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.description,
    provider: {
      "@type": "Organization",
      name: "Praesidion Security",
      url: "https://www.praesidion.eu/",
    },
    areaServed: page.areaServed.map((name) => ({ "@type": "Place", name })),
    serviceType: page.intent,
    url: page.canonical,
    dateModified: page.updatedAt,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.h1,
        item: page.canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      <article className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
              <Link href="/" className="font-medium text-primary hover:text-primary-dark">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span aria-current="page">{page.h1}</span>
            </nav>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_0.9fr] lg:px-8 lg:py-20">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                {page.eyebrow}
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                {page.hero}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:info@praesidion.nl"
                  className="rounded-md bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
                >
                  Bespreek beveiligingsvraag
                </a>
                <a
                  href="tel:+31853013015"
                  className="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition-colors hover:border-primary hover:text-primary"
                >
                  Bel Praesidion
                </a>
              </div>
            </div>
            <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-slate-950">Praktische intake</h2>
              <dl className="mt-5 space-y-4 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-slate-950">Gebied</dt>
                  <dd className="text-slate-700">{page.areaServed.join(", ")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-950">Laatste update</dt>
                  <dd className="text-slate-700">
                    <time dateTime={page.updatedAt}>
                      {new Intl.DateTimeFormat("nl-NL", { dateStyle: "long" }).format(
                        new Date(page.updatedAt),
                      )}
                    </time>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-950">Uitvoering</dt>
                  <dd className="text-slate-700">
                    Praesidion Security verzorgt de locatie-intake, planning en
                    operationele uitvoering van de zorgbeveiliging.
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">Zorgcontext en risico&apos;s</h2>
              <p className="mt-4 leading-7 text-slate-700">{page.riskContext}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">Aanpak</h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                {page.approach.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {page.sections.map((section) => (
                <section key={section.heading} className="rounded-lg border border-slate-200 p-6">
                  <h2 className="text-xl font-bold text-slate-950">{section.heading}</h2>
                  <p className="mt-4 leading-7 text-slate-700">{section.body}</p>
                  {section.bullets ? (
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <h2 className="text-2xl font-bold">Concrete deliverables</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Na intake draait de vraag om uitvoerbare afspraken: wat doet beveiliging
                wel, wat niet, wie wordt geinformeerd en hoe blijft de locatie leren van
                meldingen.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {page.deliverables.map((deliverable) => (
                <li key={deliverable} className="rounded-md bg-white/10 p-4 text-sm leading-6">
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <h2 className="text-2xl font-bold text-slate-950">Werkwijze bij aanvraag</h2>
                <ol className="mt-5 space-y-4 text-slate-700">
                  {[
                    "Korte intake over locatie, aanleiding, tijdvakken en bestaande afspraken.",
                    "Controle op rolgrenzen: beveiliging, zorgteam, receptie, facilitair en management.",
                    "Voorstel voor inzet, postinstructies, rapportage en evaluatiemoment.",
                    "Start alleen met afspraken die op locatie uitvoerbaar en uitlegbaar zijn.",
                  ].map((item, index) => (
                    <li key={item} className="flex gap-4 leading-7">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-lg border border-primary/20 bg-accent p-6">
                <h2 className="text-xl font-bold text-slate-950">Bespreek de situatie</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Deel de locatie, aanleiding en gewenste periode. Dan kan worden bepaald
                  welke beveiligingsrol passend is en welke aannames eerst moeten worden
                  getoetst.
                </p>
                <a
                  href="mailto:info@praesidion.nl"
                  className="mt-6 inline-block rounded-md bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
                >
                  Mail de intakevraag
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-950">Veelgestelde vragen</h2>
            <div className="mt-6 space-y-3">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer font-bold text-slate-950">
                    {faq.question}
                  </summary>
                  <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {relatedPages.length > 0 ? (
          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-slate-950">Gerelateerde zorgpagina&apos;s</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {relatedPages.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/${related.slug}/`}
                    className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-primary hover:bg-accent"
                  >
                    <span className="text-sm font-semibold text-primary">{related.eyebrow}</span>
                    <span className="mt-2 block font-bold text-slate-950">{related.h1}</span>
                    <span className="mt-2 block text-sm leading-6 text-slate-600">
                      {related.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}

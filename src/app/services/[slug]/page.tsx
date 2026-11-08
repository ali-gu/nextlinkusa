import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBand, PageHero } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { Accordion, SpecTable, StandardsList } from "@/components/ui/blocks";
import {
  Card,
  CheckList,
  Container,
  IconTile,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import {
  industries,
  type ServiceSlug,
  serviceSlugs,
  services,
} from "@/lib/catalog";
import { content as t } from "@/lib/content";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

type PageProps = { params: Promise<{ slug: ServiceSlug }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!serviceSlugs.includes(slug)) return {};

  const copy = t.services.items[slug];

  return buildMetadata({
    path: `/services/${slug}`,
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  if (!serviceSlugs.includes(slug)) notFound();

  const meta = services[slug];
  const copy = t.services.items[slug];
  const scopeGroups: ReadonlyArray<{
    title: string;
    rows: ReadonlyArray<{ label: string; value: string }>;
  }> = copy.scopeGroups;
  const split = Math.ceil(scopeGroups.length / 2);

  const crumbs = [
    { label: t.common.labels.home, href: "/" },
    { label: t.common.nav.services, href: "/services" },
    { label: copy.name, href: `/services/${slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={copy.tagline}
        title={copy.name}
        lede={copy.summary}
        crumbs={crumbs}
        crumbLabel={t.common.labels.breadcrumb}
        image={meta.image}
        imageAlt={copy.imageAlt}
      />

      {/* ---------------------------------------------------- introduction */}
      <Section tone="plain" size="compact">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,34rem)_1fr] lg:gap-20">
            <div className="space-y-5">
              {copy.intro.map((paragraph) => (
                <p key={paragraph} className="text-lead leading-relaxed text-navy-800/90">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {copy.highlights.map((item) => (
                <li key={item.title}>
                  <h2 className="text-base font-semibold text-navy-950">{item.title}</h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-800/85">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ scope */}
      <Section tone="tint" id="scope">
        <Container width="wide">
          <SectionHeading
            eyebrow={t.common.labels.capabilities}
            title={t.common.labels.scope}
          />
          <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-x-16">
            <SpecTable groups={scopeGroups.slice(0, split)} />
            <SpecTable groups={scopeGroups.slice(split)} />
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-navy-700">
            {t.services.index.note}
          </p>
        </Container>
      </Section>

      {/* ------------------------------------------------- standards & uses */}
      <Section tone="plain">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-20">
            <div>
              <h2 className="text-h2 font-bold text-navy-950">
                {t.common.labels.standards}
              </h2>
              <StandardsList items={copy.standards} className="mt-7" />
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-h3 font-semibold text-navy-950">
                  {t.common.labels.applications}
                </h2>
                <CheckList items={copy.applications} className="mt-5" />
              </div>
              <div>
                <h2 className="text-h3 font-semibold text-navy-950">
                  {t.common.labels.deliverables}
                </h2>
                <CheckList items={copy.deliverables} className="mt-5" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------ related industries */}
      <Section tone="tint" size="compact">
        <Container width="wide">
          <h2 className="text-h2 font-bold text-navy-950">
            {t.common.labels.relatedIndustries}
          </h2>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.relatedIndustries.map((industrySlug) => (
              <li key={industrySlug} className="flex">
                <Card interactive className="flex w-full gap-4 p-5">
                  <IconTile name={industries[industrySlug].icon} size="sm" />
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-navy-950">
                      <Link
                        href={`/industries/${industrySlug}`}
                        className="before:absolute before:inset-0 before:content-['']"
                      >
                        {t.industries.items[industrySlug].name}
                      </Link>
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-800/85">
                      {t.common.navSummary[industrySlug]}
                    </p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- faq */}
      <Section tone="plain">
        <Container width="narrow">
          <SectionHeading
            align="center"
            eyebrow={t.common.labels.faq}
            title={t.home.faq.title}
          />
          <Accordion items={copy.faq} name={`faq-${slug}`} defaultOpenFirst className="mt-12" />
        </Container>
      </Section>

      <CtaBand />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: copy.name,
            description: copy.meta.description,
            url: `/services/${slug}`,
          }),
          faqSchema(copy.faq),
        ]}
      />
    </>
  );
}

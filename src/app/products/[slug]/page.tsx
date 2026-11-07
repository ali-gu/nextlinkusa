import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBand, PageHero } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { Accordion, SpecTable, StandardsList } from "@/components/ui/blocks";
import { Icon } from "@/components/ui/icon";
import {
  Badge,
  Card,
  CheckList,
  Container,
  IconTile,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import {
  industries,
  type ProductSlug,
  productSlugs,
  products,
} from "@/lib/catalog";
import { content as t } from "@/lib/content";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  productSchema,
} from "@/lib/seo";

type PageProps = { params: Promise<{ slug: ProductSlug }> };

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!productSlugs.includes(slug)) return {};

  const copy = t.products.items[slug];

  return buildMetadata({
    path: `/products/${slug}`,
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  if (!productSlugs.includes(slug)) notFound();

  const meta = products[slug];
  const copy = t.products.items[slug];
  const expanding = "status" in copy ? copy.status : undefined;
  const specGroups: ReadonlyArray<{
    title: string;
    rows: ReadonlyArray<{ label: string; value: string }>;
  }> = copy.specGroups;
  const split = Math.ceil(specGroups.length / 2);

  const crumbs = [
    { label: t.common.labels.home, href: "/" },
    { label: t.common.nav.products, href: "/products" },
    { label: copy.name, href: `/products/${slug}` },
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
      >
        {expanding ? (
          <Badge tone="onDark" className="mt-7">
            <Icon name="clock" className="text-sm" />
            {expanding.label}
          </Badge>
        ) : null}
      </PageHero>

      {/* ---------------------------------------------------- introduction */}
      <Section tone="plain" size="compact">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,34rem)_1fr] lg:gap-20">
            <div className="space-y-5">
              {copy.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lead leading-relaxed text-navy-800/90"
                >
                  {paragraph}
                </p>
              ))}

              {expanding ? (
                <Card tone="warn" className="border-s-4 border-s-flag-600 p-5 ring-flag-100">
                  <p className="text-sm leading-relaxed text-navy-900">
                    <span className="font-semibold">{expanding.label}. </span>
                    {expanding.body}
                  </p>
                </Card>
              ) : null}
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

      {/* ------------------------------------------------------------ specs */}
      <Section tone="tint" id="specifications">
        <Container width="wide">
          <SectionHeading
            eyebrow={t.common.labels.capabilities}
            title={t.common.labels.specifications}
          />
          <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-x-16">
            <SpecTable groups={specGroups.slice(0, split)} />
            <SpecTable groups={specGroups.slice(split)} />
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-navy-700">
            {t.products.index.note}
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
          <Accordion
            items={copy.faq}
            name={`faq-${slug}`}
            defaultOpenFirst
            className="mt-12"
          />
        </Container>
      </Section>

      <CtaBand />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          productSchema({
            name: copy.name,
            description: copy.meta.description,
            image: meta.image,
            url: `/products/${slug}`,
            category: t.common.labels.products,
            specs: specGroups.flatMap((group) => group.rows).slice(0, 20),
          }),
          faqSchema(copy.faq),
        ]}
      />
    </>
  );
}

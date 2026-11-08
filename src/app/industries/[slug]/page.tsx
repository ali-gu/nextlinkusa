import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBand, PageHero } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { Accordion } from "@/components/ui/blocks";
import { Icon } from "@/components/ui/icon";
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
  industrySlugs,
  type IndustrySlug,
  services,
} from "@/lib/catalog";
import { content as t } from "@/lib/content";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: IndustrySlug }> };

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!industrySlugs.includes(slug)) return {};

  const copy = t.industries.items[slug];

  return buildMetadata({
    path: `/industries/${slug}`,
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  if (!industrySlugs.includes(slug)) notFound();

  const meta = industries[slug];
  const copy = t.industries.items[slug];

  const crumbs = [
    { label: t.common.labels.home, href: "/" },
    { label: t.common.nav.industries, href: "/industries" },
    { label: copy.name, href: `/industries/${slug}` },
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

      {/* ---------------------------------------------- intro + challenges */}
      <Section tone="plain" size="compact">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,32rem)_1fr] lg:gap-20">
            <div className="space-y-5">
              {copy.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lead leading-relaxed text-navy-800/90"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {copy.challenges.map((item) => (
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

      {/* ---------------------------------------------------- what we supply */}
      <Section tone="tint">
        <Container width="wide">
          <SectionHeading
            eyebrow={t.common.labels.capabilities}
            title={t.common.labels.relatedServices}
          />

          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {copy.work.map((item) => (
              <li key={item.title} className="flex">
                <Card interactive as="article" className="flex w-full flex-col p-7">
                  <h3 className="text-h3 font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-navy-800/85">
                    {item.body}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 before:absolute before:inset-0 before:content-['']"
                  >
                    {t.common.actions.learnMore}
                    <Icon name="arrowRight" className="text-base" />
                  </Link>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ------------------------------------------------ specification notes */}
      <Section tone="plain">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
            <SectionHeading title={copy.notes.title} />
            <CheckList items={copy.notes.items} className="lg:pt-2" />
          </div>

          <div className="mt-16 border-t border-navy-100 pt-12">
            <h2 className="text-h3 font-semibold text-navy-950">
              {t.common.labels.relatedServices}
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {copy.relatedServices.map((serviceSlug) => (
                <li key={serviceSlug} className="flex">
                  <Card interactive className="flex w-full gap-4 p-5">
                    <IconTile name={services[serviceSlug].icon} size="sm" />
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-navy-950">
                        <Link
                          href={`/services/${serviceSlug}`}
                          className="before:absolute before:inset-0 before:content-['']"
                        >
                          {t.services.items[serviceSlug].name}
                        </Link>
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-800/85">
                        {t.common.navSummary[serviceSlug]}
                      </p>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- faq */}
      <Section tone="tint">
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
            className="mt-12 divide-navy-200/70 border-navy-200/70"
          />
        </Container>
      </Section>

      <CtaBand />

      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(copy.faq)]} />
    </>
  );
}

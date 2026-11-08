import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { CatalogButton } from "@/components/catalog-button";
import { IndustryGrid, ServiceGrid } from "@/components/sections/cards";
import { CtaBand, TrustStrip } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { Accordion, StepList } from "@/components/ui/blocks";
import { Icon } from "@/components/ui/icon";
import {
  BrandRule,
  ButtonLink,
  Card,
  CheckList,
  Container,
  Eyebrow,
  IconTile,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { industryList, serviceList } from "@/lib/catalog";
import { content as t } from "@/lib/content";
import { buildMetadata, faqSchema, itemListSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const { home, common } = t;

export const metadata: Metadata = buildMetadata({
  path: "/",
  title: `${site.name} — ${home.meta.title}`,
  description: home.meta.description,
});

/** Icons are layout, not copy, so they stay next to the markup. */
const PILLAR_ICONS = ["install", "gauge", "maintenance"] as const;
const ASSURANCE_ICONS = ["document", "layers", "shieldCheck", "users"] as const;

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="bg-brand-deep relative isolate overflow-hidden text-white">
        <span
          aria-hidden="true"
          className="bg-dot-grid pointer-events-none absolute inset-0 text-white/[0.07]"
        />

        <Container width="wide" className="relative">
          <div className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-16 lg:py-24">
            <div className="max-w-2xl">
              <Eyebrow tone="dark">{home.hero.eyebrow}</Eyebrow>

              <h1 className="text-display mt-5 font-bold text-white">{home.hero.title}</h1>

              <BrandRule className="mt-7" />

              <p className="text-lead mt-6 max-w-xl text-navy-100/90">
                {home.hero.subtitle}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/quote" variant="onDark" size="lg" icon="arrowRight">
                  {home.hero.primary}
                </ButtonLink>
                <CatalogButton variant="onDarkGhost" size="lg" />
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-x-4 gap-y-6 border-t border-white/15 pt-7 sm:gap-x-6">
                {home.hero.highlights.map((item) => (
                  <div key={item.value}>
                    <dt className="numeric text-lg font-bold text-azure-300 sm:text-h3">
                      {item.value}
                    </dt>
                    <dd className="mt-1.5 text-xs leading-snug text-navy-100/75">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="relative aspect-5/4 overflow-hidden rounded-2xl shadow-float ring-1 ring-white/15">
                <Image
                  src="/images/hero-collage.jpg"
                  alt={home.hero.imageAlt}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 90vw, 100vw"
                  className="object-cover"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -end-4 -z-10 h-32 w-32 rounded-2xl bg-azure-500/25 blur-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      {/* --------------------------------------------------------- pillars */}
      <Section tone="plain">
        <Container width="wide">
          <SectionHeading
            eyebrow={home.pillars.eyebrow}
            title={home.pillars.title}
            body={home.pillars.body}
          />

          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {home.pillars.items.map((pillar, index) => (
              <li key={pillar.id} className="flex">
                <Card interactive as="article" className="flex w-full flex-col p-7">
                  <IconTile name={PILLAR_ICONS[index] ?? "layers"} />
                  <h3 className="text-h3 mt-5 font-semibold text-navy-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-800/85">
                    {pillar.body}
                  </p>
                  <CheckList items={pillar.bullets} className="mt-5" />
                  <Link
                    href={pillar.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 before:absolute before:inset-0 before:content-['']"
                  >
                    {pillar.cta}
                    <Icon name="arrowRight" className="text-base" />
                  </Link>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* -------------------------------------------------------- services */}
      <Section tone="tint">
        <Container width="wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={home.services.eyebrow}
              title={home.services.title}
              body={home.services.body}
            />
            <ButtonLink href="/services" variant="secondary" icon="arrowRight">
              {home.services.cta}
            </ButtonLink>
          </div>

          <ServiceGrid featured className="mt-14" />
        </Container>
      </Section>

      {/* ---------------------------------------------------------- why us */}
      <Section tone="plain">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow={home.why.eyebrow} title={home.why.title} />
              <div className="relative mt-10 hidden aspect-4/5 overflow-hidden rounded-2xl lg:block">
                <Image
                  src="/images/riyadh-skyline.jpg"
                  alt={t.industries.items["government-buildings"].imageAlt}
                  fill
                  sizes="352px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>

            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {home.why.items.map((item) => (
                <li key={item.id}>
                  <IconTile name={item.icon} />
                  <h3 className="text-h3 mt-5 font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-800/85">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------ industries */}
      <Section tone="tint">
        <Container width="wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={home.industries.eyebrow}
              title={home.industries.title}
              body={home.industries.body}
            />
            <ButtonLink href="/industries" variant="secondary" icon="arrowRight">
              {home.industries.cta}
            </ButtonLink>
          </div>

          <IndustryGrid compact className="mt-12" />
        </Container>
      </Section>

      {/* --------------------------------------------------------- process */}
      <Section tone="plain">
        <Container width="wide">
          <SectionHeading
            eyebrow={home.process.eyebrow}
            title={home.process.title}
            body={home.process.body}
          />
          <StepList steps={home.process.steps} className="mt-14" />
        </Container>
      </Section>

      {/* ------------------------------------------------------- assurance */}
      <Section tone="ink" className="relative isolate overflow-hidden">
        <span
          aria-hidden="true"
          className="bg-dot-grid pointer-events-none absolute inset-0 text-white/[0.06]"
        />
        <Container width="wide" className="relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
            <div>
              <SectionHeading
                tone="dark"
                eyebrow={home.assurance.eyebrow}
                title={home.assurance.title}
                body={home.assurance.body}
              />
              <ButtonLink
                href="/services"
                variant="onDarkGhost"
                icon="arrowRight"
                className="mt-8"
              >
                {home.services.cta}
              </ButtonLink>
            </div>

            <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {home.assurance.items.map((item, index) => (
                <li key={item.id}>
                  <IconTile tone="dark" name={ASSURANCE_ICONS[index] ?? "shieldCheck"} />
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-100/80">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- faq */}
      <Section tone="plain">
        <Container width="narrow">
          <SectionHeading eyebrow={home.faq.eyebrow} title={home.faq.title} align="center" />
          <Accordion items={home.faq.items} name="home-faq" defaultOpenFirst className="mt-12" />
        </Container>
      </Section>

      <CtaBand />

      <JsonLd
        data={[
          faqSchema(home.faq.items),
          itemListSchema({
            name: common.labels.services,
            items: serviceList.map((service) => ({
              name: t.services.items[service.slug].name,
              url: `/services/${service.slug}`,
            })),
          }),
          itemListSchema({
            name: common.labels.industries,
            items: industryList.map((industry) => ({
              name: t.industries.items[industry.slug].name,
              url: `/industries/${industry.slug}`,
            })),
          }),
        ]}
      />
    </>
  );
}

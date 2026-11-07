import Image from "next/image";
import type { Metadata } from "next";

import { CtaBand, PageHero } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { Icon } from "@/components/ui/icon";
import {
  ButtonLink,
  Card,
  CheckList,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { content as t } from "@/lib/content";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { mailtoLink, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
    path: "/about",
    title: t.about.meta.title,
    description: t.about.meta.description,
});

const { about } = t;

const crumbs = [
  { label: t.common.labels.home, href: "/" },
  { label: t.common.nav.about, href: "/about" },
];

export default function AboutPage() {

  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        lede={about.lede}
        crumbs={crumbs}
        crumbLabel={t.common.labels.breadcrumb}
        image="/images/riyadh-skyline.jpg"
        imageAlt={t.industries.items["government-buildings"].imageAlt}
      />

      {/* ----------------------------------------------------------- story */}
      <Section tone="plain">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
            <SectionHeading title={about.story.title} />
            <div className="space-y-5">
              {about.story.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lead leading-relaxed text-navy-800/90"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------- focus */}
      <Section tone="tint">
        <Container width="wide">
          <SectionHeading title={about.focus.title} />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="border-s-4 border-s-azure-500 p-7 lg:p-9">
              <h3 className="text-h3 font-semibold text-navy-950">
                {about.focus.doTitle}
              </h3>
              <CheckList items={about.focus.does} className="mt-5" />
            </Card>

            <Card tone="veil" className="border-s-4 border-s-navy-300 p-7 lg:p-9">
              <h3 className="text-h3 font-semibold text-navy-950">
                {about.focus.dontTitle}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {about.focus.donts.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[0.95rem] leading-relaxed text-navy-800/90"
                  >
                    <Icon
                      name="close"
                      className="mt-[0.3em] shrink-0 text-[0.85em] text-navy-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- partners */}
      <Section tone="plain">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,28rem)_1fr] lg:gap-20">
            <div>
              <SectionHeading title={about.partners.title} />
              <p className="mt-6 leading-relaxed text-navy-800/85">
                {about.partners.body}
              </p>
              <ButtonLink
                href={mailtoLink(`${site.name} — ${about.partners.cta}`)}
                variant="secondary"
                icon="mail"
                iconPosition="start"
                className="mt-7"
              >
                {about.partners.cta}
              </ButtonLink>
            </div>

            {site.partners.length > 0 ? (
              <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-navy-100 sm:grid-cols-3">
                {site.partners.map((partner) => (
                  <li
                    key={partner.name}
                    className="flex items-center justify-center bg-white p-8"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200}
                      height={64}
                      className="h-10 w-auto"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <Card tone="tint" className="flex items-center p-8 lg:p-10">
                <p className="text-[0.95rem] leading-relaxed text-navy-800/90">
                  <Icon
                    name="clock"
                    className="me-2 inline align-[-0.15em] text-lg text-navy-400"
                  />
                  {about.partners.pendingNote}
                </p>
              </Card>
            )}
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------- certifications */}
      <Section tone="ink" className="relative isolate overflow-hidden">
        <span
          aria-hidden="true"
          className="bg-dot-grid pointer-events-none absolute inset-0 text-white/[0.06]"
        />
        <Container width="wide" className="relative">
          <SectionHeading
            tone="dark"
            title={about.certifications.title}
            body={about.certifications.body}
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {about.certifications.groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-h3 font-semibold text-white">{group.title}</h3>
                <CheckList items={group.items} tone="dark" className="mt-5" />
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-navy-200/80">
            {about.certifications.note}
          </p>
        </Container>
      </Section>

      {/* -------------------------------------------------------- coverage */}
      <Section tone="plain">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
            <div>
              <SectionHeading title={about.coverage.title} />
              <p className="mt-6 leading-relaxed text-navy-800/85">
                {about.coverage.body}
              </p>
            </div>

            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
              {about.coverage.points.map((point) => (
                <li key={point.title}>
                  <h3 className="text-base font-semibold text-navy-950">{point.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-800/85">
                    {point.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CtaBand />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}

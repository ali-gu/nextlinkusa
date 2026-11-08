import type { Metadata } from "next";

import { PageHero } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { KeyValueTable } from "@/components/ui/blocks";
import { Icon } from "@/components/ui/icon";
import {
  ButtonLink,
  Card,
  CheckList,
  Container,
  IconTile,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { content as t } from "@/lib/content";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { mailtoLink, site } from "@/lib/site";

const q = t.quote;

export const metadata: Metadata = buildMetadata({
  path: "/quote",
  title: q.meta.title,
  description: q.meta.description,
});

const crumbs = [
  { label: t.common.labels.home, href: "/" },
  { label: t.common.nav.quote, href: "/quote" },
];

export default function QuotePage() {
  const emailHref = mailtoLink(
    `${q.channels.email.subject} — ${site.name}`,
    q.channels.email.template,
  );

  return (
    <>
      <PageHero
        eyebrow={q.eyebrow}
        title={q.title}
        lede={q.lede}
        crumbs={crumbs}
        crumbLabel={t.common.labels.breadcrumb}
      />

      {/* ----------------------------------------------- the two channels */}
      <Section tone="tint">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-14">
            <div>
              <Card className="flex flex-col p-7">
                <IconTile name="mail" />
                <h2 className="text-h3 mt-5 font-semibold text-navy-950">
                  {q.channels.email.title}
                </h2>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-navy-800/85">
                  {q.channels.email.body}
                </p>
                <ButtonLink
                  href={emailHref}
                  size="lg"
                  icon="mail"
                  iconPosition="start"
                  className="mt-6"
                >
                  {q.channels.email.cta}
                </ButtonLink>
                <p className="mt-3 text-xs leading-relaxed text-navy-600">
                  {q.channels.email.note}
                </p>
                <p className="mt-3 text-sm font-medium break-all text-navy-700">
                  {site.email}
                </p>
              </Card>

            </div>

            <aside className="space-y-6">
              <Card className="p-6">
                <h2 className="text-base font-semibold text-navy-950">
                  {q.whatYouGet.title}
                </h2>
                <CheckList items={q.whatYouGet.items} className="mt-4" />
                <p className="mt-5 border-t border-navy-100 pt-4 text-sm leading-relaxed text-navy-700">
                  {q.whatYouGet.timing}
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="text-base font-semibold text-navy-950">
                  {q.response.title}
                </h2>
                <KeyValueTable rows={q.response.rows} className="mt-4" />
                <p className="mt-4 text-xs leading-relaxed text-navy-600">
                  {q.response.note}
                </p>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------- what to include */}
      <Section tone="plain">
        <Container width="wide">
          <SectionHeading
            eyebrow={q.brief.eyebrow}
            title={q.brief.title}
            body={q.brief.body}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {q.brief.groups.map((group) => (
              <Card key={group.title} className="p-7">
                <h3 className="text-h3 font-semibold text-navy-950">{group.title}</h3>
                <CheckList items={group.items} className="mt-5" />
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-navy-100 pt-10">
            <ButtonLink href={emailHref} size="lg" icon="mail" iconPosition="start">
              {q.channels.email.cta}
            </ButtonLink>
            <p className="flex items-start gap-2 text-xs leading-relaxed text-navy-600 sm:max-w-sm">
              <Icon name="shieldCheck" className="mt-[0.2em] shrink-0 text-sm" />
              {q.privacyNote}
            </p>
          </div>
        </Container>
      </Section>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}

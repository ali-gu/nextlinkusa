import type { Metadata } from "next";

import { PageHero } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { KeyValueTable } from "@/components/ui/blocks";
import { Icon, type IconName } from "@/components/ui/icon";
import {
  ButtonLink,
  Card,
  Container,
  IconTile,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { content as t } from "@/lib/content";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { hasAddress, mailtoLink, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
    path: "/contact",
    title: t.contact.meta.title,
    description: t.contact.meta.description,
});

const c = t.contact;

const crumbs = [
  { label: t.common.labels.home, href: "/" },
  { label: t.common.nav.contact, href: "/contact" },
];

export default function ContactPage() {

  const channels: Array<{
    icon: IconName;
    label: string;
    note: string;
    value: string;
    href: string;
  }> = [
    {
      icon: "mail",
      label: c.channels.email.label,
      note: c.channels.email.note,
      value: site.email,
      href: mailtoLink(),
    },
    {
      icon: "quote",
      label: c.channels.quote.label,
      note: c.channels.quote.note,
      value: c.channels.quote.cta,
      href: "/quote",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lede={c.lede}
        crumbs={crumbs}
        crumbLabel={t.common.labels.breadcrumb}
      />

      {/* -------------------------------------------------------- channels */}
      <Section tone="plain">
        <Container width="wide">
          <h2 className="sr-only">{c.channels.title}</h2>
          <ul className="grid max-w-3xl gap-5 sm:grid-cols-2">
            {channels.map((channel) => (
              <li key={channel.label} className="flex">
                <Card interactive className="flex w-full flex-col p-6">
                  <IconTile name={channel.icon} />
                  <h3 className="mt-5 text-base font-semibold text-navy-950">
                    {channel.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/85">
                    {channel.note}
                  </p>
                  <a
                    href={channel.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold break-words text-navy-700 before:absolute before:inset-0 before:content-['']"
                  >
                    <span>{channel.value}</span>
                    <Icon name="arrowRight" className="shrink-0 text-base" />
                  </a>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---------------------------------------------- hours + what to send */}
      <Section tone="tint">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-20">
            <div>
              <SectionHeading title={c.hours.title} />
              <KeyValueTable rows={c.hours.rows} className="mt-8" />
              <p className="mt-5 text-sm leading-relaxed text-navy-700">{c.hours.note}</p>

              <div className="mt-12">
                <h2 className="text-h3 font-semibold text-navy-950">{c.offices.title}</h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-navy-900">{c.offices.legalLabel}</dt>
                    <dd className="mt-1 text-navy-800/85">{site.legalName}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-900">{c.offices.addressLabel}</dt>
                    <dd className="mt-1 text-navy-800/85">
                      {hasAddress ? (
                        <address className="not-italic">
                          {site.address.street}
                          <br />
                          {[site.address.locality, site.address.region, site.address.postalCode]
                            .filter(Boolean)
                            .join(", ")}
                          <br />
                          {site.address.countryName}
                        </address>
                      ) : (
                        <>
                          {site.address.countryName}
                          <br />
                          {t.common.footer.addressOnRequest}
                        </>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-900">{c.offices.coverageLabel}</dt>
                    <dd className="mt-1 text-navy-800/85">{c.offices.coverageValue}</dd>
                  </div>
                </dl>
                <p className="mt-5 text-sm text-navy-700">{c.offices.prequalNote}</p>
              </div>
            </div>

            <div>
              <SectionHeading title={c.brief.title} body={c.brief.body} />

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href="/quote" size="lg" icon="arrowRight">
                  {c.brief.cta}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------------- privacy */}
      <Section tone="plain" size="compact">
        <Container width="narrow">
          <h2 className="text-h3 font-semibold text-navy-950">{c.privacy.title}</h2>
          <p className="mt-4 leading-relaxed text-navy-800/85">{c.privacy.body}</p>
        </Container>
      </Section>

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: c.meta.title,
            description: c.meta.description,
            url: `${site.url}${"/contact"}`,
          },
        ]}
      />
    </>
  );
}

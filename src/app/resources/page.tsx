import type { Metadata } from "next";

import { CatalogButton } from "@/components/catalog-button";
import { CopyButton } from "@/components/copy-button";
import { CtaBand, PageHero } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { StandardsList, StepList } from "@/components/ui/blocks";
import { Icon } from "@/components/ui/icon";
import {
  Badge,
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
import { specSections } from "@/lib/spec-text";

export const metadata: Metadata = buildMetadata({
    path: "/resources",
    title: t.resources.meta.title,
    description: t.resources.meta.description,
});

const r = t.resources;

const crumbs = [
  { label: t.common.labels.home, href: "/" },
  { label: t.common.nav.resources, href: "/resources" },
];

export default function ResourcesPage() {

  return (
    <>
      <PageHero
        tone="tint"
        eyebrow={r.eyebrow}
        title={r.title}
        lede={r.lede}
        crumbs={crumbs}
        crumbLabel={t.common.labels.breadcrumb}
      >
        <nav aria-label={r.eyebrow} className="mt-9">
          <ul className="flex flex-wrap gap-2">
            {r.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-flex h-9 items-center rounded-full bg-white px-4 text-sm font-medium text-navy-800 ring-1 ring-navy-200 transition-colors hover:bg-navy-50 hover:ring-navy-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {/* ------------------------------------------------------- datasheets */}
      <Section tone="plain" id="datasheets">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,28rem)_1fr] lg:gap-20">
            <div>
              <SectionHeading title={r.datasheets.title} />
              <div className="mt-6 space-y-4">
                {r.datasheets.body.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-navy-800/85">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={"/quote"}
                  icon="arrowRight"
                >
                  {r.datasheets.cta}
                </ButtonLink>
                <CatalogButton />
              </div>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {r.datasheets.categories.map((category) => (
                <li key={category.title} className="flex">
                  <Card className="w-full p-6">
                    <h3 className="text-base font-semibold text-navy-950">
                      {category.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-navy-800/85"
                        >
                          <Icon
                            name="document"
                            className="mt-[0.2em] shrink-0 text-[0.95em] text-navy-400"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ saber */}
      <Section tone="tint" id="saber">
        <Container width="wide">
          <SectionHeading title={r.saber.title} body={r.saber.lede} />

          <div className="mt-8 max-w-3xl space-y-4">
            {r.saber.body.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-navy-800/85">
                {paragraph}
              </p>
            ))}
          </div>

          <StepList steps={r.saber.steps} className="mt-14" />

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
            <Card className="border-s-4 border-s-flag-600 p-7">
              <h3 className="text-h3 font-semibold text-navy-950">
                {r.saber.pitfallsTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {r.saber.pitfalls.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[0.95rem] leading-relaxed text-navy-800/90"
                  >
                    <Icon
                      name="alert"
                      className="mt-[0.25em] shrink-0 text-[0.95em] text-flag-600"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <p className="rounded-2xl bg-navy-900 p-7 text-[0.95rem] leading-relaxed text-navy-100/90">
              {r.saber.note}
            </p>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- standards */}
      <Section tone="plain" id="standards">
        <Container width="wide">
          <SectionHeading title={r.standards.title} body={r.standards.lede} />

          <div className="mt-12 space-y-12">
            {r.standards.groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-h3 font-semibold text-navy-950">{group.title}</h3>
                <StandardsList items={group.items} className="mt-5 lg:grid-cols-3" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- hazardous */}
      <Section tone="tint" id="hazardous">
        <Container width="wide">
          <SectionHeading title={r.hazardous.title} body={r.hazardous.lede} />

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-h3 font-semibold text-navy-950">
                {r.hazardous.zonesTitle}
              </h3>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-start text-sm">
                  <thead>
                    <tr className="border-b border-navy-200">
                      <th scope="col" className="py-2.5 pe-4 text-start font-semibold text-navy-900">
                        IEC
                      </th>
                      <th scope="col" className="py-2.5 pe-4 text-start font-semibold text-navy-900">
                        NEC
                      </th>
                      <th scope="col" className="py-2.5 text-start font-semibold text-navy-900">
                        —
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    {r.hazardous.zones.map((row) => (
                      <tr key={row.zone}>
                        <td className="py-3 pe-4 font-semibold text-navy-800">{row.zone}</td>
                        <td className="py-3 pe-4 text-navy-800/85">{row.division}</td>
                        <td className="py-3 text-navy-800/85">{row.presence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy-700">
                {r.hazardous.zonesNote}
              </p>

              <h3 className="text-h3 mt-12 font-semibold text-navy-950">
                {r.hazardous.groupsTitle}
              </h3>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[30rem] border-collapse text-start text-sm">
                  <thead>
                    <tr className="border-b border-navy-200">
                      <th scope="col" className="py-2.5 pe-4 text-start font-semibold text-navy-900">
                        IEC
                      </th>
                      <th scope="col" className="py-2.5 pe-4 text-start font-semibold text-navy-900">
                        NEC
                      </th>
                      <th scope="col" className="py-2.5 text-start font-semibold text-navy-900">
                        —
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    {r.hazardous.groups.map((row) => (
                      <tr key={row.iec}>
                        <td className="py-3 pe-4 font-semibold text-navy-800">{row.iec}</td>
                        <td className="py-3 pe-4 text-navy-800/85">{row.na}</td>
                        <td className="py-3 text-navy-800/85">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-h3 font-semibold text-navy-950">
                {r.hazardous.conceptsTitle}
              </h3>
              <ul className="mt-5 space-y-4">
                {r.hazardous.concepts.map((concept) => (
                  <li key={concept.code} className="flex gap-4">
                    <Badge tone="accent" className="numeric mt-0.5 shrink-0">
                      {concept.code}
                    </Badge>
                    <p className="text-[0.95rem] leading-relaxed text-navy-800/85">
                      {concept.title}
                    </p>
                  </li>
                ))}
              </ul>

              <Card className="mt-10 p-7">
                <h3 className="text-base font-semibold text-navy-950">
                  {r.hazardous.checklistTitle}
                </h3>
                <CheckList items={r.hazardous.checklist} className="mt-4" />
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------- export */}
      <Section tone="plain" id="export">
        <Container width="wide">
          <SectionHeading title={r.exportDocs.title} body={r.exportDocs.lede} />

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-20">
            <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {r.exportDocs.items.map((item) => (
                <li key={item.title}>
                  <h3 className="text-base font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-navy-800/85">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>

            <div>
              <h3 className="text-h3 font-semibold text-navy-950">
                {r.exportDocs.incotermsTitle}
              </h3>
              <dl className="mt-5 divide-y divide-navy-100 border-y border-navy-100">
                {r.exportDocs.incoterms.map((term) => (
                  <div key={term.code} className="py-3.5">
                    <dt className="numeric text-sm font-bold text-navy-900">{term.code}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-navy-800/85">
                      {term.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- spec text */}
      <Section tone="ink" id="spec-text" className="relative isolate overflow-hidden">
        <span
          aria-hidden="true"
          className="bg-dot-grid pointer-events-none absolute inset-0 text-white/[0.06]"
        />
        <Container width="wide" className="relative">
          <SectionHeading tone="dark" title={r.specText.title} body={r.specText.lede} />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-navy-200/80">
            {r.specText.note}
          </p>

          <div className="mt-12 space-y-8">
            {specSections.map((section) => (
              <article
                key={section.id}
                className="overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/12"
              >
                <header className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 p-6">
                  <div className="min-w-0">
                    <p className="numeric text-sm font-bold text-azure-300">{section.code}</p>
                    <h3 className="text-h3 mt-1 font-semibold text-white">{section.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-200/80">
                      <span className="font-semibold text-navy-100">
                        {r.specText.scopeLabel}:{" "}
                      </span>
                      {section.scope}
                    </p>
                  </div>
                  <CopyButton
                    value={section.body}
                    label={r.specText.copyLabel}
                    copiedLabel={r.specText.copiedLabel}
                  />
                </header>

                <div className="max-h-[32rem] overflow-auto bg-navy-950/60">
                  <pre
                    dir="ltr"
                    className="w-max min-w-full p-6 font-mono text-[0.78rem] leading-relaxed whitespace-pre text-navy-100/90"
                  >
                    {section.body}
                  </pre>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------- prequalification */}
      <Section tone="tint" id="prequalification">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,28rem)_1fr] lg:gap-20">
            <div>
              <SectionHeading title={r.prequalification.title} />
              <p className="mt-6 leading-relaxed text-navy-800/85">
                {r.prequalification.body}
              </p>
              <ButtonLink
                href={mailtoLink(`${site.name} — ${r.prequalification.cta}`)}
                icon="mail"
                iconPosition="start"
                className="mt-8"
              >
                {r.prequalification.cta}
              </ButtonLink>
              <p className="mt-4 text-sm text-navy-700">{r.prequalification.note}</p>
            </div>

            <Card className="p-7 lg:p-9">
              <CheckList items={r.prequalification.items} columns />
            </Card>
          </div>
        </Container>
      </Section>

      <CtaBand />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}

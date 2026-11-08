import type { Metadata } from "next";

import { ServiceGrid } from "@/components/sections/cards";
import { CtaBand, PageHero } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { KeyValueTable } from "@/components/ui/blocks";
import {
  Card,
  CheckList,
  Container,
  IconTile,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { deliveryIcons, deliveryIds, serviceList } from "@/lib/catalog";
import { content as t } from "@/lib/content";
import {
  breadcrumbSchema,
  buildMetadata,
  collectionPageSchema,
  serviceCatalogSchema,
} from "@/lib/seo";

const { index, delivery, commitments } = t.services;

export const metadata: Metadata = buildMetadata({
  path: "/services",
  title: index.meta.title,
  description: index.meta.description,
});

const crumbs = [
  { label: t.common.labels.home, href: "/" },
  { label: t.common.nav.services, href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tone="tint"
        eyebrow={index.eyebrow}
        title={index.title}
        lede={index.lede}
        crumbs={crumbs}
        crumbLabel={t.common.labels.breadcrumb}
      />

      <Section tone="plain">
        <Container width="wide">
          <ServiceGrid featured />
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-navy-700">
            {index.note}
          </p>
        </Container>
      </Section>

      {/* ------------------------------------------------ delivery stages */}
      <Section tone="tint">
        <Container width="wide">
          <SectionHeading
            eyebrow={delivery.eyebrow}
            title={delivery.title}
            body={delivery.body}
          />

          <ul className="mt-12 space-y-8">
            {deliveryIds.map((id, index_) => {
              const stage = delivery.items[id];
              return (
                <li key={id}>
                  <Card className="p-7 lg:p-9">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
                      <div>
                        <div className="flex items-center gap-4">
                          <IconTile name={deliveryIcons[id]} />
                          <span className="numeric text-sm font-bold text-navy-300">
                            {String(index_ + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="text-h3 mt-5 font-semibold text-navy-950">
                          {stage.name}
                        </h3>
                        <p className="mt-1.5 text-sm font-semibold text-azure-700">
                          {stage.tagline}
                        </p>
                        <p className="mt-4 text-[0.95rem] leading-relaxed text-navy-800/85">
                          {stage.body}
                        </p>
                      </div>

                      <CheckList items={stage.includes} columns className="lg:pt-1" />
                    </div>
                  </Card>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* ------------------------------------------------------ commitments */}
      <Section tone="plain">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
            <SectionHeading eyebrow={commitments.eyebrow} title={commitments.title} />
            <div>
              <KeyValueTable rows={commitments.rows} />
              <p className="mt-6 text-sm leading-relaxed text-navy-700">
                {commitments.note}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          collectionPageSchema({
            name: index.title,
            description: index.meta.description,
            url: "/services",
          }),
          serviceCatalogSchema({
            name: index.title,
            services: serviceList.map((service) => ({
              name: t.services.items[service.slug].name,
              description: t.services.items[service.slug].summary,
            })),
          }),
        ]}
      />
    </>
  );
}

import type { Metadata } from "next";

import { CtaBand, PageHero } from "@/components/sections/common";
import { FeatureGrid } from "@/components/sections/cards";
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
import { serviceIcons, serviceIds } from "@/lib/catalog";
import { content as t } from "@/lib/content";
import {
  breadcrumbSchema,
  buildMetadata,
  serviceCatalogSchema,
} from "@/lib/seo";

const { services } = t;

export const metadata: Metadata = buildMetadata({
  path: "/services",
  title: services.meta.title,
  description: services.meta.description,
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
        eyebrow={services.eyebrow}
        title={services.title}
        lede={services.lede}
        crumbs={crumbs}
        crumbLabel={t.common.labels.breadcrumb}
      />

      <Section tone="plain">
        <Container width="wide">
          <ul className="space-y-10">
            {serviceIds.map((id, index) => {
              const service = services.items[id];
              return (
                <li key={id}>
                  <Card className="overflow-hidden p-7 lg:p-9">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
                      <div>
                        <div className="flex items-center gap-4">
                          <IconTile name={serviceIcons[id]} />
                          <span className="numeric text-sm font-bold text-navy-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h2 className="text-h3 mt-5 font-semibold text-navy-950">
                          {service.name}
                        </h2>
                        <p className="mt-1.5 text-sm font-semibold text-azure-700">
                          {service.tagline}
                        </p>
                        <p className="mt-4 text-[0.95rem] leading-relaxed text-navy-800/85">
                          {service.body}
                        </p>
                      </div>

                      <CheckList items={service.includes} columns className="lg:pt-1" />
                    </div>
                  </Card>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section tone="tint">
        <Container width="wide">
          <SectionHeading
            eyebrow={services.engagement.eyebrow}
            title={services.engagement.title}
          />
          <FeatureGrid items={services.engagement.items} columns={3} className="mt-12" />
        </Container>
      </Section>

      <Section tone="plain">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
            <SectionHeading
              eyebrow={services.commitments.eyebrow}
              title={services.commitments.title}
            />
            <div>
              <KeyValueTable rows={services.commitments.rows} />
              <p className="mt-6 text-sm leading-relaxed text-navy-700">
                {services.commitments.note}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceCatalogSchema({
            name: services.title,
            services: serviceIds.map((id) => ({
              name: services.items[id].name,
              description: services.items[id].body,
            })),
          }),
        ]}
      />
    </>
  );
}

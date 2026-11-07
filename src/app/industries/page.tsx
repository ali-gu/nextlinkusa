import type { Metadata } from "next";

import { IndustryGrid } from "@/components/sections/cards";
import { CtaBand, PageHero } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { Container, Section } from "@/components/ui/primitives";
import { industryList } from "@/lib/catalog";
import { content as t } from "@/lib/content";
import {
  breadcrumbSchema,
  buildMetadata,
  collectionPageSchema,
  itemListSchema,
} from "@/lib/seo";

const { index } = t.industries;

export const metadata: Metadata = buildMetadata({
  path: "/industries",
  title: index.meta.title,
  description: index.meta.description,
});

const crumbs = [
  { label: t.common.labels.home, href: "/" },
  { label: t.common.nav.industries, href: "/industries" },
];

export default function IndustriesPage() {
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
          <IndustryGrid />
        </Container>
      </Section>

      <CtaBand />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          collectionPageSchema({
            name: index.title,
            description: index.meta.description,
            url: "/industries",
          }),
          itemListSchema({
            name: t.common.labels.industries,
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

import type { Metadata } from "next";

import { ProductGrid } from "@/components/sections/cards";
import { CtaBand, PageHero } from "@/components/sections/common";
import { JsonLd } from "@/components/seo/json-ld";
import { StandardsList } from "@/components/ui/blocks";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { productList } from "@/lib/catalog";
import { content as t } from "@/lib/content";
import {
  breadcrumbSchema,
  buildMetadata,
  collectionPageSchema,
  itemListSchema,
} from "@/lib/seo";

const { index } = t.products;

export const metadata: Metadata = buildMetadata({
  path: "/products",
  title: index.meta.title,
  description: index.meta.description,
});

const crumbs = [
  { label: t.common.labels.home, href: "/" },
  { label: t.common.nav.products, href: "/products" },
];

// A deduplicated roll-up of every standard the three ranges are built to.
const standards = Array.from(
  new Map(
    productList
      .flatMap((product) => t.products.items[product.slug].standards)
      .map((standard) => [standard.code, standard]),
  ).values(),
);

export default function ProductsPage() {
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
          <ProductGrid />
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-navy-700">
            {index.note}
          </p>
        </Container>
      </Section>

      <Section tone="tint">
        <Container width="wide">
          <SectionHeading
            eyebrow={t.common.labels.standards}
            title={t.resources.standards.title}
            body={t.resources.standards.lede}
          />
          <StandardsList items={standards} className="mt-12" />
        </Container>
      </Section>

      <CtaBand />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          collectionPageSchema({
            name: index.title,
            description: index.meta.description,
            url: "/products",
          }),
          itemListSchema({
            name: t.common.labels.products,
            items: productList.map((product) => ({
              name: t.products.items[product.slug].name,
              url: `/products/${product.slug}`,
            })),
          }),
        ]}
      />
    </>
  );
}

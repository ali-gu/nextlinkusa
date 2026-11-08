import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import { Card, IconTile } from "@/components/ui/primitives";
import { industryList, serviceList } from "@/lib/catalog";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------- services -- */

export function ServiceGrid({
  className,
  featured,
}: {
  className?: string;
  /** Gives the first three cards imagery; the rest stay compact. */
  featured?: boolean;
}) {
  const t = content;

  return (
    <ul className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {serviceList.map((service, index) => {
        const copy = t.services.items[service.slug];
        const href = `/services/${service.slug}`;
        const withImage = Boolean(featured) && index < 3;

        return (
          <li key={service.slug} className="flex">
            <Card interactive as="article" className="flex w-full flex-col overflow-hidden">
              {withImage ? (
                <div className="relative aspect-16/9 overflow-hidden bg-navy-100">
                  <Image
                    src={service.image}
                    alt={copy.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-navy-950/10 to-transparent"
                  />
                  <IconTile
                    name={service.icon}
                    tone="dark"
                    className="absolute bottom-3 start-3 backdrop-blur-sm"
                  />
                </div>
              ) : null}

              <div className="flex flex-1 flex-col p-6">
                {!withImage ? <IconTile name={service.icon} className="mb-4" /> : null}

                <h3 className="text-h3 font-semibold text-navy-950">
                  <Link href={href} className="before:absolute before:inset-0 before:content-['']">
                    {copy.name}
                  </Link>
                </h3>

                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-navy-800/85">
                  {copy.summary}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700">
                  {t.common.actions.learnMore}
                  <Icon name="arrowRight" className="text-base" />
                </span>
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

/* ----------------------------------------------------------- industries -- */

export function IndustryGrid({
  className,
  compact,
}: {
  className?: string;
  compact?: boolean;
}) {
  const t = content;

  return (
    <ul
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
        compact && "lg:grid-cols-5 lg:gap-4",
        className,
      )}
    >
      {industryList.map((industry) => {
        const copy = t.industries.items[industry.slug];
        const href = `/industries/${industry.slug}`;

        return (
          <li key={industry.slug} className="flex">
            <Card
              interactive
              as="article"
              className={cn("flex w-full flex-col", compact ? "p-5" : "p-6")}
            >
              <IconTile name={industry.icon} size={compact ? "sm" : "md"} />

              <h3
                className={cn(
                  "mt-4 font-semibold text-navy-950",
                  compact ? "text-base" : "text-h3",
                )}
              >
                <Link href={href} className="before:absolute before:inset-0 before:content-['']">
                  {copy.name}
                </Link>
              </h3>

              <p
                className={cn(
                  "mt-2 flex-1 leading-relaxed text-navy-800/85",
                  compact ? "text-sm" : "text-[0.95rem]",
                )}
              >
                {compact ? t.common.navSummary[industry.slug] : copy.summary}
              </p>

              {!compact ? (
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700">
                  {t.common.actions.learnMore}
                  <Icon name="arrowRight" className="text-base" />
                </span>
              ) : null}
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

/* ------------------------------------------------------- generic feature -- */

export function FeatureGrid({
  items,
  columns = 2,
  tone = "light",
  className,
}: {
  items: ReadonlyArray<{
    title: string;
    body: string;
    icon?: React.ComponentProps<typeof IconTile>["name"];
  }>;
  columns?: 2 | 3 | 4;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-10 gap-y-8",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.title}>
          {item.icon ? <IconTile name={item.icon} tone={tone} className="mb-4" /> : null}
          <h3
            className={cn(
              "text-base font-semibold",
              tone === "light" ? "text-navy-950" : "text-white",
            )}
          >
            {item.title}
          </h3>
          <p
            className={cn(
              "mt-2 text-[0.95rem] leading-relaxed",
              tone === "light" ? "text-navy-800/85" : "text-navy-100/80",
            )}
          >
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

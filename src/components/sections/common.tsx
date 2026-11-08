import Image from "next/image";
import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/ui/blocks";
import { Icon, type IconName } from "@/components/ui/icon";
import {
  BrandRule,
  ButtonLink,
  Container,
  Eyebrow,
  Section,
} from "@/components/ui/primitives";
import { content } from "@/lib/content";
import { mailtoLink, site } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------- page hero -- */

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  crumbLabel,
  tone = "deep",
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs: Crumb[];
  crumbLabel: string;
  tone?: "deep" | "tint";
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  const dark = tone === "deep";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        dark ? "bg-brand-deep text-white" : "border-b border-navy-100 bg-navy-50/60",
      )}
    >
      {dark ? (
        <span
          aria-hidden="true"
          className="bg-dot-grid pointer-events-none absolute inset-0 text-white/[0.07]"
        />
      ) : null}

      <Container width="wide" className="relative">
        <div
          className={cn(
            "grid gap-10 py-10 sm:py-14 lg:py-20",
            image && "lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-center lg:gap-16",
          )}
        >
          <div className="max-w-3xl">
            <Breadcrumbs
              items={crumbs}
              label={crumbLabel}
              tone={dark ? "dark" : "light"}
            />

            {eyebrow ? (
              <Eyebrow tone={dark ? "dark" : "light"} className="mt-7">
                {eyebrow}
              </Eyebrow>
            ) : null}

            <h1
              className={cn(
                "text-h1 mt-3 font-bold",
                dark ? "text-white" : "text-navy-950",
              )}
            >
              {title}
            </h1>

            <BrandRule className="mt-6" />

            {lede ? (
              <p
                className={cn(
                  "text-lead mt-6",
                  dark ? "text-navy-100/85" : "text-navy-800/85",
                )}
              >
                {lede}
              </p>
            ) : null}

            {children}
          </div>

          {image ? (
            <div className="relative hidden lg:block">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl ring-1 ring-white/15">
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  sizes="352px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ trust strip -- */

export function TrustStrip() {
  const { trust } = content.common;
  const markers: Array<{ icon: IconName; label: string }> = [
    { icon: "government", label: trust.usCompany },
    { icon: "truck", label: trust.directOem },
    { icon: "shieldCheck", label: trust.saberReady },
    { icon: "plug", label: trust.voltage },
    { icon: "language", label: trust.bilingual },
  ];

  return (
    <Section tone="plain" size="tight" className="border-b border-navy-100">
      <Container width="wide">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-5">
          {markers.map((marker) => (
            <li
              key={marker.label}
              className="flex items-center gap-2.5 text-[0.82rem] leading-snug font-semibold text-navy-800"
            >
              <Icon name={marker.icon} className="shrink-0 text-lg text-azure-600" />
              <span>{marker.label}</span>
            </li>
          ))}
        </ul>

        {site.partners.length > 0 ? (
          <div className="mt-8 border-t border-navy-100 pt-8">
            <h2 className="text-xs font-bold tracking-[0.14em] text-navy-500 uppercase">
              {trust.partnersTitle}
            </h2>
            <ul className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-6">
              {site.partners.map((partner) => (
                <li key={partner.name}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={48}
                    className="h-8 w-auto opacity-70 transition-opacity hover:opacity-100"
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-6 border-t border-navy-100 pt-6 text-xs leading-relaxed text-navy-600">
            <span className="font-semibold text-navy-800">{trust.partnersTitle}: </span>
            {trust.partnersPending}
          </p>
        )}
      </Container>
    </Section>
  );
}

/* --------------------------------------------------------------- cta band -- */

export function CtaBand() {
  const { ctaBand } = content.common;

  return (
    <Section tone="deep" size="compact" className="relative isolate overflow-hidden">
      <span
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 text-white/[0.07]"
      />
      <Container width="wide" className="relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <Eyebrow tone="dark">{ctaBand.eyebrow}</Eyebrow>
            <h2 className="text-h2 mt-3 font-bold text-white">{ctaBand.title}</h2>
            <p className="text-lead mt-4 text-navy-100/85">{ctaBand.body}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <ButtonLink
              href={"/quote"}
              variant="onDark"
              size="lg"
              icon="arrowRight"
            >
              {ctaBand.primary}
            </ButtonLink>
            <ButtonLink
              href={mailtoLink()}
              variant="onDarkGhost"
              size="lg"
              icon="mail"
              iconPosition="start"
            >
              {ctaBand.secondary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

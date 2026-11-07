import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/primitives";
import { industryList, productList } from "@/lib/catalog";
import { content } from "@/lib/content";
import {
  catalog,
  formatPhone,
  hasAddress,
  mailtoLink,
  site,
  telLink,
  whatsappLink,
} from "@/lib/site";

export function SiteFooter() {
  const { footer, nav, actions } = content.common;
  const year = new Date().getFullYear();

  const companyLinks = [
    { key: "services", href: "/services" },
    { key: "resources", href: "/resources" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
  ] as const;

  return (
    <footer className="border-t border-navy-100 bg-navy-50/50">
      <Container width="wide">
        <div className="grid gap-12 py-14 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 lg:py-16">
          <div>
            <Link href={"/"} className="inline-block rounded-sm" aria-label={site.name}>
              <Image
                src="/brand/nextlink-logo.png"
                alt={site.name}
                width={754}
                height={256}
                sizes="170px"
                className="h-12 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-800/85">
              {footer.blurb}
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li>
                <a
                  href={mailtoLink()}
                  className="inline-flex items-center gap-2.5 rounded-sm font-medium text-navy-800 underline-offset-4 hover:text-navy-950 hover:underline"
                >
                  <Icon name="mail" className="text-base text-azure-600" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-sm font-medium text-navy-800 underline-offset-4 hover:text-navy-950 hover:underline"
                >
                  <Icon name="whatsapp" className="text-base text-[#25D366]" />
                  <span>{actions.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2.5 rounded-sm font-medium text-navy-800 underline-offset-4 hover:text-navy-950 hover:underline"
                >
                  <Icon name="phone" className="text-base text-azure-600" />
                  <span className="numeric">{formatPhone()}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <FooterColumn title={footer.columns.products}>
              {productList.map((product) => (
                <FooterLink
                  key={product.slug}
                  href={`/products/${product.slug}`}
                >
                  {nav[product.slug]}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title={footer.columns.industries}>
              {industryList.map((industry) => (
                <FooterLink
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                >
                  {nav[industry.slug]}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title={footer.columns.company}>
              {companyLinks.map((item) => (
                <FooterLink key={item.key} href={item.href}>
                  {nav[item.key]}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title={footer.columns.contact}>
              <FooterLink href={"/quote"}>
                {actions.requestQuote}
              </FooterLink>
              <li>
                <a
                  href={catalog.href}
                  {...(catalog.available ? { download: "" } : {})}
                  className="inline-flex items-center gap-1.5 rounded-sm text-sm text-navy-700 underline-offset-4 hover:text-navy-950 hover:underline"
                >
                  <Icon
                    name={catalog.available ? "download" : "mail"}
                    className="text-[0.95em]"
                  />
                  {catalog.available ? actions.downloadCatalog : actions.requestCatalog}
                </a>
              </li>
              <li>
                <a
                  href={mailtoLink(
                    `${site.name} — ${actions.downloadPrequal}`,
                  )}
                  className="inline-flex items-start gap-1.5 rounded-sm text-sm text-navy-700 underline-offset-4 hover:text-navy-950 hover:underline"
                >
                  <Icon name="document" className="mt-[0.2em] shrink-0 text-[0.95em]" />
                  <span>{footer.prequalCta}</span>
                </a>
              </li>
              {site.social.linkedin ? (
                <li>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-sm text-sm text-navy-700 underline-offset-4 hover:text-navy-950 hover:underline"
                  >
                    <Icon name="linkedin" className="text-[0.95em]" />
                    LinkedIn
                  </a>
                </li>
              ) : null}
            </FooterColumn>
          </div>
        </div>

        <div className="border-t border-navy-100 py-7">
          <div className="flex flex-col gap-4 text-xs leading-relaxed text-navy-700/80 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-1">
              <p className="font-semibold text-navy-900">{site.legalName}</p>
              {hasAddress ? (
                <address className="not-italic">
                  {site.address.street}
                  {site.address.locality ? `, ${site.address.locality}` : ""}
                  {site.address.region ? `, ${site.address.region}` : ""}
                  {site.address.postalCode ? ` ${site.address.postalCode}` : ""}
                  <br />
                  {site.address.countryName}
                </address>
              ) : (
                <p>
                  {site.address.countryName} · {footer.addressOnRequest}
                </p>
              )}
            </div>

            <div className="space-y-1 lg:text-end">
              <p>
                © {year} {site.legalName}. {footer.rights}
              </p>
              <p>{footer.builtNote}</p>
              <p>{footer.responseNote}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-bold tracking-[0.14em] text-navy-950 uppercase">{title}</h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="rounded-sm text-sm text-navy-700 underline-offset-4 transition-colors hover:text-navy-950 hover:underline"
      >
        {children}
      </Link>
    </li>
  );
}

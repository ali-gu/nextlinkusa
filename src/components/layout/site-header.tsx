import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Icon } from "@/components/ui/icon";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { primaryNav } from "@/lib/catalog";
import { content } from "@/lib/content";
import { site } from "@/lib/site";

export function SiteHeader() {
  const { nav, navSummary, actions } = content.common;

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <Container width="wide">
        <div className="flex h-[var(--header-h)] items-center gap-3">
          <Link href="/" className="shrink-0 rounded-sm" aria-label={site.name}>
            <Image
              src="/brand/nextlink-logo.png"
              alt={site.name}
              width={754}
              height={256}
              priority
              sizes="(min-width: 1024px) 150px, 124px"
              className="h-10 w-auto lg:h-12"
            />
          </Link>

          <nav aria-label="Main" className="ms-auto hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        className="inline-flex h-10 items-center rounded-lg px-3 text-[0.9rem] font-semibold text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy-950"
                      >
                        {nav[item.key]}
                      </Link>
                    </li>
                  );
                }

                return (
                  // Hover plus focus-within keeps the flyout keyboard-reachable
                  // without shipping a menu-button state machine to the client.
                  <li key={item.key} className="group relative">
                    <Link
                      href={item.href}
                      className="inline-flex h-10 items-center gap-1 rounded-lg px-3 text-[0.9rem] font-semibold text-navy-800 transition-colors group-hover:bg-navy-50 group-focus-within:bg-navy-50 hover:text-navy-950"
                    >
                      {nav[item.key]}
                      <Icon
                        name="chevronDown"
                        className="text-sm text-navy-400 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      />
                    </Link>

                    <div className="invisible absolute start-0 top-full z-10 pt-2 opacity-0 transition-[opacity,transform] duration-200 ease-[var(--ease-out-quint)] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-safe:translate-y-1">
                      <ul className="w-[26rem] rounded-2xl border border-navy-100 bg-white p-2 shadow-float">
                        {item.children.map((child) => (
                          <li key={child.key}>
                            <Link
                              href={child.href}
                              className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-navy-50"
                            >
                              {child.icon ? (
                                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-lg text-navy-700 ring-1 ring-navy-100">
                                  <Icon name={child.icon} />
                                </span>
                              ) : null}
                              <span className="min-w-0">
                                <span className="block text-[0.9rem] font-semibold text-navy-950">
                                  {nav[child.key]}
                                </span>
                                <span className="mt-0.5 block text-xs leading-snug text-navy-600">
                                  {navSummary[child.key]}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ms-auto flex items-center gap-1.5 lg:ms-3">
            {/* Wrapper, not a `hidden` class on the button: the button's own
                `inline-flex` would otherwise win the cascade. */}
            <span className="hidden sm:block">
              <ButtonLink href="/quote" size="sm" icon="arrowRight">
                {actions.requestQuote}
              </ButtonLink>
            </span>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}

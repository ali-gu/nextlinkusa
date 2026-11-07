"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { Icon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/primitives";
import { primaryNav } from "@/lib/catalog";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const { nav, navSummary, actions } = content.common;
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  // Navigating dismisses the sheet. Adjusting during render rather than in an
  // effect avoids the extra commit that would flash the open panel.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={actions.openMenu}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex size-10 items-center justify-center rounded-lg text-navy-800 transition-colors hover:bg-navy-50 lg:hidden"
      >
        <Icon name="menu" className="text-2xl" />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-0 z-[70] lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label={actions.openMenu}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="absolute inset-0 h-full w-full cursor-default bg-navy-950/45 backdrop-blur-[2px]"
        />

        <div className="absolute inset-y-0 end-0 flex w-full max-w-sm flex-col bg-white shadow-float">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-navy-100 px-5">
            <span className="text-sm font-semibold tracking-wide text-navy-500 uppercase">
              Menu
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label={actions.closeMenu}
              className="inline-flex size-10 items-center justify-center rounded-lg text-navy-800 transition-colors hover:bg-navy-50"
            >
              <Icon name="close" className="text-2xl" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
            <ul className="space-y-0.5">
              {primaryNav.map((item) => {
                const active = pathname.startsWith(item.href);

                if (!item.children) {
                  return (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-lg px-3 py-3 text-base font-semibold transition-colors",
                          active
                            ? "bg-navy-50 text-navy-900"
                            : "text-navy-800 hover:bg-navy-50",
                        )}
                      >
                        {nav[item.key]}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.key}>
                    <details open={active} className="group">
                      <summary className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-navy-50">
                        {nav[item.key]}
                        <Icon
                          name="chevronDown"
                          className="text-lg text-navy-400 transition-transform duration-300 group-open:rotate-180"
                        />
                      </summary>
                      <ul className="mb-2 ms-3 space-y-0.5 border-s border-navy-100 ps-3">
                        <li>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-600 hover:bg-navy-50"
                          >
                            {nav[item.key]}
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.key}>
                            <Link
                              href={child.href}
                              className="block rounded-lg px-3 py-2.5 text-sm text-navy-800 hover:bg-navy-50"
                            >
                              <span className="font-medium">{nav[child.key]}</span>
                              <span className="mt-0.5 block text-xs leading-snug text-navy-500">
                                {navSummary[child.key]}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-navy-100 p-5">
            <ButtonLink href="/quote" icon="arrowRight" className="w-full" size="lg">
              {actions.requestQuote}
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}

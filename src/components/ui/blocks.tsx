import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------- breadcrumbs -- */

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  label,
  tone = "light",
  className,
}: {
  items: Crumb[];
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <nav aria-label={label} className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <Icon
                  name="chevronRight"
                  className={cn(
                    "text-[0.8em]",
                    tone === "light" ? "text-navy-300" : "text-white/35",
                  )}
                />
              ) : null}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-sm underline-offset-2 hover:underline",
                    tone === "light"
                      ? "text-navy-600 hover:text-navy-800"
                      : "text-azure-200 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={tone === "light" ? "text-navy-800" : "text-white/80"}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------- accordion -- */

/**
 * Built on native <details>, so it works before hydration and ships no JS.
 * `name` groups items into an exclusive accordion where the browser supports it.
 */
export function Accordion({
  items,
  name,
  className,
  defaultOpenFirst,
}: {
  items: ReadonlyArray<{ q: string; a: string }>;
  name?: string;
  className?: string;
  defaultOpenFirst?: boolean;
}) {
  return (
    <div className={cn("divide-y divide-navy-100 border-y border-navy-100", className)}>
      {items.map((item, index) => (
        <details
          key={item.q}
          name={name}
          open={defaultOpenFirst && index === 0}
          className="group"
        >
          <summary className="flex w-full items-start justify-between gap-6 py-5 text-start">
            <span className="text-[1.0625rem] font-semibold text-navy-950 group-open:text-navy-700">
              {item.q}
            </span>
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-600 transition-transform duration-300 ease-[var(--ease-out-quint)] group-open:rotate-180 group-open:bg-azure-50 group-open:text-azure-700">
              <Icon name="chevronDown" className="text-[0.85em]" />
            </span>
          </summary>
          <div className="pb-6 text-[0.95rem] leading-relaxed text-navy-800/85">
            <p className="max-w-3xl">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ spec table -- */

export function SpecTable({
  groups,
  className,
}: {
  groups: ReadonlyArray<{
    title: string;
    rows: ReadonlyArray<{ label: string; value: string }>;
  }>;
  className?: string;
}) {
  return (
    <div className={cn("space-y-10", className)}>
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-h3 font-semibold text-navy-950">{group.title}</h3>
          <dl className="mt-4 divide-y divide-navy-100 border-t border-navy-100">
            {group.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 py-3.5 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-6"
              >
                <dt className="text-sm font-semibold text-navy-900">{row.label}</dt>
                <dd className="numeric text-[0.95rem] leading-relaxed text-navy-800/85">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

/* --------------------------------------------------------- standard list -- */

export function StandardsList({
  items,
  className,
}: {
  items: ReadonlyArray<{ code: string; title: string }>;
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-px overflow-hidden rounded-xl bg-navy-100 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item.code} className="bg-white p-4">
          <p className="numeric text-sm font-bold tracking-tight text-navy-900">{item.code}</p>
          <p className="mt-1 text-sm leading-relaxed text-navy-800/80">{item.title}</p>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------- key/value -- */

export function KeyValueTable({
  rows,
  tone = "light",
  className,
}: {
  rows: ReadonlyArray<{ label: string; value: string }>;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "divide-y",
        tone === "light" ? "divide-navy-100 border-y border-navy-100" : "divide-white/10 border-y border-white/10",
        className,
      )}
    >
      {rows.map((row) => (
        <div key={row.label} className="grid gap-1 py-3.5 sm:grid-cols-2 sm:gap-6">
          <dt className={cn("text-sm font-semibold", tone === "light" ? "text-navy-900" : "text-white")}>
            {row.label}
          </dt>
          <dd className={cn("text-[0.95rem]", tone === "light" ? "text-navy-800/85" : "text-navy-100/80")}>
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------ step list -- */

export function StepList({
  steps,
  className,
}: {
  steps: ReadonlyArray<{ id?: string; title: string; body: string }>;
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="relative ps-12">
          <span
            aria-hidden="true"
            className="numeric absolute start-0 top-0 inline-flex size-9 items-center justify-center rounded-lg bg-navy-900 text-sm font-bold text-white"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-base font-semibold text-navy-950">{step.title}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-800/85">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

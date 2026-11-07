import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { Icon, type IconName } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------- container -- */

export function Container({
  className,
  children,
  width = "default",
}: {
  className?: string;
  children: ReactNode;
  width?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        width === "narrow" && "max-w-3xl",
        width === "default" && "max-w-6xl",
        width === "wide" && "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* --------------------------------------------------------------- section -- */

type SectionTone = "plain" | "tint" | "deep" | "ink";

const SECTION_TONE: Record<SectionTone, string> = {
  plain: "bg-white text-ink",
  tint: "bg-navy-50/60 text-ink",
  deep: "bg-brand-deep text-white",
  ink: "bg-navy-950 text-white",
};

export function Section({
  tone = "plain",
  size = "default",
  className,
  children,
  id,
  ...rest
}: {
  tone?: SectionTone;
  size?: "default" | "compact" | "tight";
  className?: string;
  children: ReactNode;
  id?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "className" | "id">) {
  return (
    <section
      id={id}
      className={cn(
        SECTION_TONE[tone],
        size === "default" && "py-16 sm:py-20 lg:py-28",
        size === "compact" && "py-12 sm:py-16 lg:py-20",
        size === "tight" && "py-8 sm:py-10",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

/* --------------------------------------------------------------- eyebrow -- */

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.7rem] font-semibold tracking-[0.18em] uppercase",
        tone === "light" ? "text-azure-700" : "text-azure-300",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** The three-stop rule that echoes the brand mark. */
export function BrandRule({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("rule-brand block", className)} />;
}

/* ------------------------------------------------------------ section head */

export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "light",
  align = "start",
  as: Tag = "h2",
  className,
  children,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  tone?: "light" | "dark";
  align?: "start" | "center";
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "text-h2 mt-3 font-bold",
          tone === "light" ? "text-navy-950" : "text-white",
        )}
      >
        {title}
      </Tag>
      <BrandRule className={cn("mt-5", align === "center" && "mx-auto")} />
      {body ? (
        <p
          className={cn(
            "text-lead mt-5",
            tone === "light" ? "text-navy-800/85" : "text-navy-100/85",
          )}
        >
          {body}
        </p>
      ) : null}
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- button -- */

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkGhost";

const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-[background-color,color,box-shadow,transform] duration-200 ease-[var(--ease-out-quint)] active:translate-y-px whitespace-nowrap";

const BUTTON_VARIANT: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-700 text-white shadow-[0_1px_2px_rgb(6_26_51/0.2)] hover:bg-navy-800 hover:shadow-[0_6px_20px_-8px_rgb(6_26_51/0.5)]",
  secondary:
    "bg-white text-navy-800 ring-1 ring-navy-200 hover:bg-navy-50 hover:ring-navy-300",
  ghost: "text-navy-700 hover:bg-navy-50",
  onDark:
    "bg-azure-500 text-navy-950 hover:bg-azure-400 shadow-[0_8px_24px_-10px_rgb(18_163_232/0.8)]",
  onDarkGhost:
    "text-white ring-1 ring-white/30 hover:bg-white/10 hover:ring-white/50 backdrop-blur-sm",
};

const BUTTON_SIZE = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-base sm:h-13 sm:px-7",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: keyof typeof BUTTON_SIZE;
  icon?: IconName;
  iconPosition?: "start" | "end";
  className?: string;
  external?: boolean;
  download?: boolean;
  prefetch?: boolean;
  "aria-label"?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "end",
  className,
  external,
  download,
  prefetch,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(BUTTON_BASE, BUTTON_VARIANT[variant], BUTTON_SIZE[size], className);
  const glyph = icon ? (
    <Icon
      name={icon}
      className="shrink-0 text-[1.15em]"
    />
  ) : null;

  const content = (
    <>
      {iconPosition === "start" ? glyph : null}
      {children}
      {iconPosition === "end" ? glyph : null}
    </>
  );

  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: "" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} prefetch={prefetch} {...rest}>
      {content}
    </Link>
  );
}

/* ------------------------------------------------------------------ card -- */

type CardTone = "plain" | "tint" | "warn" | "veil";

/**
 * Background is a prop rather than a className override: `cn` concatenates
 * without resolving conflicts, so a `bg-*` passed in would lose to the base
 * class whenever Tailwind happens to emit it earlier in the stylesheet.
 */
const CARD_TONE: Record<CardTone, string> = {
  plain: "bg-white",
  tint: "bg-navy-50/60",
  warn: "bg-flag-50/60",
  veil: "bg-white/70",
};

export function Card({
  className,
  children,
  as: Tag = "div",
  interactive,
  tone = "plain",
}: {
  className?: string;
  children: ReactNode;
  as?: ElementType;
  interactive?: boolean;
  tone?: CardTone;
}) {
  return (
    <Tag
      className={cn(
        "relative rounded-2xl ring-1 ring-navy-100",
        CARD_TONE[tone],
        interactive &&
          "shadow-card transition-[box-shadow,transform] duration-300 ease-[var(--ease-out-quint)] hover:-translate-y-0.5 hover:shadow-card-hover hover:ring-navy-200",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Square tinted tile that carries a section or card icon. */
export function IconTile({
  name,
  tone = "light",
  size = "md",
  className,
}: {
  name: IconName;
  tone?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl",
        size === "md" ? "size-12 text-2xl" : "size-10 text-xl",
        tone === "light"
          ? "bg-navy-50 text-navy-700 ring-1 ring-navy-100"
          : "bg-white/10 text-azure-300 ring-1 ring-white/15",
        className,
      )}
    >
      <Icon name={name} />
    </span>
  );
}

/* ------------------------------------------------------------- list items -- */

export function CheckList({
  items,
  tone = "light",
  className,
  columns,
}: {
  items: readonly string[];
  tone?: "light" | "dark";
  className?: string;
  columns?: boolean;
}) {
  return (
    <ul
      className={cn(
        "space-y-2.5",
        columns && "sm:columns-2 sm:gap-x-10 sm:space-y-0",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-2.5 text-[0.95rem] leading-relaxed",
            columns && "sm:mb-2.5 sm:break-inside-avoid",
            tone === "light" ? "text-navy-800/90" : "text-navy-100/85",
          )}
        >
          <Icon
            name="check"
            className={cn(
              "mt-[0.3em] shrink-0 text-[0.9em]",
              tone === "light" ? "text-azure-600" : "text-azure-400",
            )}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ----------------------------------------------------------------- badge -- */

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "warn" | "onDark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        tone === "neutral" && "bg-navy-50 text-navy-700 ring-1 ring-navy-100",
        tone === "accent" && "bg-azure-50 text-azure-800 ring-1 ring-azure-200",
        tone === "warn" && "bg-flag-50 text-flag-800 ring-1 ring-flag-200",
        tone === "onDark" && "bg-white/10 text-azure-200 ring-1 ring-white/15",
        className,
      )}
    >
      {children}
    </span>
  );
}

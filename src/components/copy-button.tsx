"use client";

import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/ui/icon";

export function CopyButton({
  value,
  label,
  copiedLabel,
}: {
  value: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2400);
    } catch {
      // Clipboard is blocked (insecure context or denied permission); the text
      // is on screen and selectable, so there is nothing useful to recover.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-9 items-center gap-2 rounded-lg bg-white px-3.5 text-sm font-semibold text-navy-800 ring-1 ring-navy-200 transition-colors hover:bg-navy-50 hover:ring-navy-300"
    >
      <Icon
        name={copied ? "check" : "document"}
        className={copied ? "text-base text-azure-600" : "text-base text-navy-500"}
      />
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}

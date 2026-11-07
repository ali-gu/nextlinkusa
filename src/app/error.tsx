"use client";

import { useEffect } from "react";

import { ButtonLink, Container, Section } from "@/components/ui/primitives";
import { content } from "@/lib/content";
import { mailtoLink, site } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[page] Render failed", error);
  }, [error]);

  const copy = content.common.error;

  return (
    <Section tone="plain">
      <Container width="narrow" className="py-10 text-center">
        <h1 className="text-h2 font-bold text-navy-950">{copy.title}</h1>
        <p className="text-lead mx-auto mt-5 max-w-xl text-navy-800/85">{copy.body}</p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-navy-700 px-5 font-semibold text-white transition-colors hover:bg-navy-800"
          >
            {copy.retry}
          </button>
          <ButtonLink
            href={mailtoLink(`${site.name} — website issue`)}
            variant="secondary"
            icon="mail"
            iconPosition="start"
          >
            {content.common.actions.email}
          </ButtonLink>
        </div>

        {error.digest ? (
          <p className="numeric mt-8 text-xs text-navy-500">Reference: {error.digest}</p>
        ) : null}
      </Container>
    </Section>
  );
}

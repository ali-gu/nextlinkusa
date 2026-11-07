import { ButtonLink } from "@/components/ui/primitives";
import { content } from "@/lib/content";
import { catalog } from "@/lib/site";

/**
 * The catalogue call to action. It only offers a download once a PDF is
 * configured; before that it opens a pre-addressed request, so the button is
 * never a dead link.
 */
export function CatalogButton({
  variant = "secondary",
  size = "md",
  className,
}: {
  variant?: "primary" | "secondary" | "onDarkGhost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { actions } = content.common;

  return (
    <ButtonLink
      href={catalog.href}
      variant={variant}
      size={size}
      className={className}
      icon={catalog.available ? "download" : "mail"}
      iconPosition="start"
      download={catalog.available}
    >
      {catalog.available ? actions.downloadCatalog : actions.requestCatalog}
    </ButtonLink>
  );
}

export type ClassValue = string | false | null | undefined;

/**
 * Joins class names. It does NOT resolve Tailwind conflicts — if a caller
 * passes a utility that fights one baked into a component, whichever Tailwind
 * emits later in the stylesheet wins. Components expose conflicting choices
 * (background, display) as props instead.
 */
export function cn(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}

/** Strips markup-unsafe whitespace from user input before it reaches an email. */
export function collapse(value: string, max = 5000) {
  return value.replace(/\r\n/g, "\n").trim().slice(0, max);
}

/**
 * Structured data is emitted as a plain script tag rather than through
 * next/script so it lands in the prerendered HTML with no client runtime.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          // Angle brackets are the only escape that matters inside a JSON-LD
          // block; everything else is already valid inside a script element.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

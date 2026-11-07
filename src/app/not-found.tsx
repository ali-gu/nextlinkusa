import { ButtonLink, Container, Section } from "@/components/ui/primitives";
import { content } from "@/lib/content";

/** Rendered for any path that does not match a route. */
export default function NotFound() {
  const { notFound, actions, nav } = content.common;

  return (
    <Section tone="plain">
      <Container width="narrow" className="py-10 text-center">
        <p className="numeric text-display font-bold text-navy-100">{notFound.code}</p>
        <h1 className="text-h2 mt-2 font-bold text-navy-950">{notFound.title}</h1>
        <p className="text-lead mx-auto mt-5 max-w-xl text-navy-800/85">
          {notFound.body}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" icon="arrowRight">
            {actions.backHome}
          </ButtonLink>
          <ButtonLink href="/products" variant="secondary">
            {nav.products}
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            {nav.contact}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

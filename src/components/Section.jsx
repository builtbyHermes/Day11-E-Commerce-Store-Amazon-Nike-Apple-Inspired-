import Container from "./Container";

function Section({ children }) {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
}

export default Section;
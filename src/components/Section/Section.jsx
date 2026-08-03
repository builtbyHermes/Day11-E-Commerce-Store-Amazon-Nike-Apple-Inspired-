import Container from "../Container/Container";
import styles from './Section.module.css';

function Section({ children }) {
  return (
    <section className={styles.section}>
      <Container>{children}</Container>
    </section>
  );
}

export default Section;
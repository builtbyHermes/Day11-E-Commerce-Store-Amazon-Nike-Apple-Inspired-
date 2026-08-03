import styles from './SectionHeader.module.css';

function SectionHeader({
  title,
  subtitle,
  action
}) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>

        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
      </div>

      <div className={styles.action}>{action}</div>
    </header>
  );
}

export default SectionHeader;
import styles from './SectionDivider.module.css';

export default function SectionDivider() {
  return (
    <div className={styles.divider}>
      <div className={styles.dividerContent}>
        <div className={styles.line} />
        <div className={styles.diamond} />
        <div className={styles.line} />
      </div>
    </div>
  );
}
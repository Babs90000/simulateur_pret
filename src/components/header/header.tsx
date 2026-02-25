import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>💰</div>
        <h1>Simulateur de Prêt Pro</h1>
      </div>
      <p>Calculez vos mensualités et intérêts en toute simplicité</p>
    </header>
  );
}

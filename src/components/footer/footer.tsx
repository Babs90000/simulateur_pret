import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Simulateur de prêt sécurisé - {new Date().getFullYear()} | Données
        confidentielles
      </p>
    </footer>
  );

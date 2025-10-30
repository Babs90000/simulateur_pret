import styles from "./formulaire.module.css";
import {
  FaMoneyBillWave,
  FaCalendarAlt,
  FaPercent,
  FaCalculator,
  FaCoins,
} from "react-icons/fa";

export default function Formulaire({
  capital,
  Duree,
  Taux,
  setCapital,
  setDuree,
  setTaux,
  onCalculer,
}) {
  return (
    <form className={styles.formulaire} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.capital}>
        <label htmlFor="capital">
          <FaMoneyBillWave className={styles.icon} /> capital du prêt
        </label>
        <input
          type="text"
          name="capital"
          id="capital"
          className={styles.champs}
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          required
        />
      </div>
      <div className={styles.durée_et_intérêt}>
        <div className={styles.block_duree}>
          <label htmlFor="durée">
            <FaCalendarAlt className={styles.icon} /> Durée (en année)
          </label>
          <input
            type="text"
            name="durée"
            id="durée"
            className={styles.autre_champs}
            value={Duree}
            onChange={(e) => setDuree(e.target.value)}
            required
          />
        </div>
        <div className={styles.block_intérêt}>
          <label htmlFor="taux_intérêt">
            <FaPercent className={styles.icon} /> Taux d'intérêt
          </label>
          <input
            type="text"
            name="taux_intérêt"
            id="taux_intérêt"
            className={styles.autre_champs}
            value={Taux}
            onChange={(e) => setTaux(e.target.value)}
            required
          />
        </div>
      </div>
      <br />
      <br />

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onCalculer();
        }}
        name="soumettre"
        className="bouton"
      >
        <i className="bi bi-calculator"></i> Calcul du remboursement
      </button>
    </form>
  );
}

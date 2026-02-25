import styles from "./formulaire.module.css";
import {
  FaEuroSign,
  FaClock,
  FaPercent,
  FaCalculator,
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
      <div className={styles.montant}>
        <label htmlFor="capital">
          <FaEuroSign className={styles.icon} /> Montant du prêt
        </label>
        <input
          type="number"
          name="capital"
          id="capital"
          className={styles.champs}
          value={capital || ''}
          onChange={(e) => setCapital(Number(e.target.value))}
          placeholder="Ex: 200000"
          required
        />
      </div>
      <div className={styles.durée_et_intérêt}>
        <div className={styles.block_duree}>
          <label htmlFor="durée">
            <FaClock className={styles.icon} /> Durée (années)
          </label>
          <input
            type="number"
            name="durée"
            id="durée"
            className={styles.autre_champs}
            value={Duree || ''}
            onChange={(e) => setDuree(Number(e.target.value))}
            placeholder="Ex: 20"
            required
          />
        </div>
        <div className={styles.block_intérêt}>
          <label htmlFor="taux_intérêt">
            <FaPercent className={styles.icon} /> Taux d'intérêt (%)
          </label>
          <input
            type="number"
            name="taux_intérêt"
            id="taux_intérêt"
            className={styles.autre_champs}
            value={Taux || ''}
            onChange={(e) => setTaux(Number(e.target.value))}
            step="0.01"
            placeholder="Ex: 2.5"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onCalculer();
        }}
        className={styles.button}
      >
        <FaCalculator className={styles.buttonIcon} />
        Calculer mon prêt
      </button>
    </form>
  );
}

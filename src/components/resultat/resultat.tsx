import styles from "./resultat.module.css";
import { FaChartLine, FaEuroSign, FaCalendarAlt, FaPiggyBank } from "react-icons/fa";

interface ResultatProps {
  montantTotal: number;
  mensualites: number;
  interetMensuel: number;
  resultatVisible: boolean;
  interetTotal: number;
}

export default function Resultat({
  montantTotal,
  mensualites,
  interetMensuel,
  resultatVisible,
  interetTotal,
}: ResultatProps) {
  if (resultatVisible) {
    return (
      <div className={styles.resultat}>
        <h2>
          <FaChartLine className={styles.titleIcon} />
          Résultats du calcul
        </h2>
        <p>Voici le détail de votre simulation de prêt :</p>
        <ul>
          <li>
            <FaEuroSign className={styles.listIcon} />
            <div>
              <strong>Montant total à rembourser</strong>
              <span className={styles.value}>{montantTotal.toFixed(2)} €</span>
            </div>
          </li>
          <li>
            <FaCalendarAlt className={styles.listIcon} />
            <div>
              <strong>Mensualités</strong>
              <span className={styles.value}>{mensualites.toFixed(2)} €</span>
            </div>
          </li>
          <li>
            <FaPiggyBank className={styles.listIcon} />
            <div>
              <strong>Intérêt mensuel moyen</strong>
              <span className={styles.value}>{interetMensuel.toFixed(2)} €</span>
            </div>
          </li>
          <li>
            <FaChartLine className={styles.listIcon} />
            <div>
              <strong>Intérêt total</strong>
              <span className={styles.value}>{interetTotal.toFixed(2)} €</span>
            </div>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className={styles.resultat}>
        <h2>
          <FaChartLine className={styles.titleIcon} />
          Résultats du calcul
        </h2>
        <p>Ici seront affichés les résultats du calcul de prêt.</p>
        <div className={styles.resultatVide} id="resultatVide">
          <div className={styles.calculatorIcon}>🧮</div>
          <h3 className={styles.titre_affichage_resultat}>
            Les résultats s'affichent ici
          </h3>
          <p className={styles.phrase_explicative}>
            Remplissez le formulaire et cliquez sur "Calculer mon prêt" pour voir
            votre simulation personnalisée.
          </p>
        </div>
      </div>
    );
  }
}
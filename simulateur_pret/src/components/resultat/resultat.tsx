import styles from "./resultat.module.css";

export default function Resultat({
  montantTotal,
  mensualites,
  interetMensuel,
  resultatVisible,
  interetTotal,
}) {
  if (resultatVisible) {
    return (
      <div>
        <div className={styles.resultat}>
          <h2>Résultats du calcul</h2>
          <p>Voici les résultats de votre simulation de prêt :</p>
          <ul>
            <li>
              <strong>Montant total à rembourser :</strong>
              {montantTotal} €
            </li>
            <li>
              <strong>Mensualités :</strong>
              {mensualites} €
            </li>
            <li>
              <strong>Intérêt mensuel :</strong>
              {interetMensuel} €
            </li>
            <li>
              <strong>Intérêt total :</strong>
              {interetTotal} €
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.resultat}>
        <h2>Résultats du calcul</h2>
        <p>Ici seront affichés les résultats du calcul de prêt.</p>
        <div className={styles.resultatVide} id="resultatVide">
          <img
            src="./assets/images/illustration-empty.svg"
            alt=""
            className={styles.image_calculatrice}
          />
          <h3 className={styles.titre_affichage_resultat}>
            Les résultats s'affichent ici
          </h3>
          <p className={styles.phrase_explicative}>
            Remplissez le formulaire et cliquez sur « calculer les
            remboursements » pour voir quels seraient vos remboursements
            mensuels..
          </p>
        </div>
      </div>
    );
  }
}

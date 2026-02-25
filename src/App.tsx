import "./App.css";
import { useState } from "react";
import Formulaire from "./components/formulaire/formulaire";
import Resultat from "./components/resultat/resultat";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default function App() {
  // États pour stocker les valeurs du formulaire
  const [capital, setCapital] = useState(0);
  const [duree, setDuree] = useState(0);
  const [taux, setTaux] = useState(0);

  // Etats pour les résultats
  const [mensualites, setMensualites] = useState(0);
  const [montantTotal, setMontantTotal] = useState(0);
  const [interetMensuel, setInteretMensuel] = useState(0);
  const [resultatVisible, setResultatVisible] = useState(false);
  const [interetTotal, setInteretTotal] = useState(0); // Ajouté comme state

  const NombreMensualites = duree * 12;
  let capitalRestant = capital;
  let interetTotalCalc = 0;

  for (let i = 0; i < NombreMensualites; i++) {
    interetTotalCalc += (capital * (taux / 100)) / 12;
  }

  function calculer() {
    if (
      isNaN(capital) ||
      capital <= 0 ||
      isNaN(duree) ||
      duree <= 0 ||
      isNaN(taux) ||
      taux < 0
    ) {
      alert(
        "Veuillez entrer des valeurs valides pour le montant, la durée et le taux d'intérêt."
      );
    } else {
      const nombreMensualites = duree * 12;
      const tauxMensuel = taux / 100 / 12;

      // Formule exacte pour repayment
      const mensualitesCalc =
        (capital *
          (tauxMensuel * Math.pow(1 + tauxMensuel, nombreMensualites))) /
        (Math.pow(1 + tauxMensuel, nombreMensualites) - 1);
      const montantTotalCalc = mensualitesCalc * nombreMensualites;
      const interetTotalCalc = montantTotalCalc - capital;
      const interetMensuelCalc = interetTotalCalc / nombreMensualites; // Moyenne des intérêts

      setMensualites(mensualitesCalc);
      setMontantTotal(montantTotalCalc);
      setInteretMensuel(interetMensuelCalc);
      setInteretTotal(interetTotalCalc); // Mis à jour ici
      setResultatVisible(true);
    }
  }
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Formulaire
          capital={capital}
          Duree={duree}
          Taux={taux}
          setCapital={setCapital}
          setDuree={setDuree}
          setTaux={setTaux}
          onCalculer={calculer}
        />
        <Resultat
          montantTotal={montantTotal}
          mensualites={mensualites}
          interetMensuel={interetMensuel}
          resultatVisible={resultatVisible}
          interetTotal={interetTotal}
        />
      </div>
      <Footer />
    </div>
  );
}

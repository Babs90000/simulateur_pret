document
  .getElementById("formulaire_prêt")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    let montant = parseFloat(document.getElementById("montant").value);
    let durée = parseFloat(document.getElementById("durée").value);
    let tauxIntérêt =
      parseFloat(document.getElementById("taux_intérêt").value) / 100;
    let type = document.querySelector('input[name="type"]:checked').value;

    // Vérifier que toutes les valeurs sont valides
    if (isNaN(montant) || isNaN(durée) || isNaN(tauxIntérêt) || !type) {
      alert("Veuillez remplir correctement les champs s'il vous plaît.");
      return;
    }

    let mensualités;
    let montantTotalRembourse;
    let interetMensuel;

    // Calcul du montant remboursé et des intérêts
    if (type === "Repayment") {
      let nombreMensualités = durée * 12;
      let CapitalRestantDu = montant;
      let remboursementCapitalAnuuel = montant / durée;
      let remboursementCapitalMensuel = montant / nombreMensualités;
      let montantTotalInteret = 0;

      while (durée > 0) {
        montantTotalInteret += CapitalRestantDu * tauxIntérêt;
        CapitalRestantDu -= remboursementCapitalAnuuel;

        durée--;
      }

      interetMensuel = montantTotalInteret / nombreMensualités;
      mensualités = remboursementCapitalMensuel + interetMensuel;
      montantTotalRembourse = mensualités * nombreMensualités;

      // Calcul du montant des intérêts payés
    } else if (type === "Interest_only") {
      let nombreMensualités = durée * 12;
      let CapitalRestantDu = montant;
      let remboursementCapitalAnuuel = montant / durée;
      let montantTotalInteret = 0;

      while (durée > 0) {
        montantTotalInteret += CapitalRestantDu * tauxIntérêt;
        CapitalRestantDu -= remboursementCapitalAnuuel;

        durée--;
      }

      mensualités = montantTotalInteret / nombreMensualités;
      montantTotalRembourse = montantTotalInteret;
    }

    // Vérifier que les mensualités sont définies
    if (mensualités === undefined || isNaN(mensualités)) {
      alert("Une erreur s'est produite lors du calcul des mensualités.");
      return;
    }

    // Afficher le résultat sans effacer le contenu existant
    let resultatDiv = document.getElementById("resultat");
    let resultatObtenu = document.getElementById("resultat_obtenu");

    if (type === "Repayment") {
      resultatObtenu.innerHTML = `<p>Mensualités: ${mensualités.toFixed(
        2
      )} €</p>`;
      resultatObtenu.innerHTML += `<p>Montant total remboursé: ${montantTotalRembourse.toFixed(
        2
      )} €</p>`;
    } else if (type === "Interest_only") {
      resultatObtenu.innerHTML = `<p>Intérêts mensuels: ${interetMensuel.toFixed(
        2
      )} €</p>`;
      resultatObtenu.innerHTML += `<p>Intérêts totaux remboursés: ${montantTotalRembourse.toFixed(
        2
      )} €</p>`;
    }
    resultatDiv.classList.remove("hidden");

    // Rendre invisible le message vide
    let resultatVide = document.getElementById("resultatVide");
    resultatVide.style.display = "none";
  });

document.getElementById(
  "footer"
).innerHTML = `<a href="https://baboucdportfolio-a6fa81dec8fa.herokuapp.com/">&copy; ${new Date().getFullYear()} Babou CAMARA-DIABY. Tous droits réservés.</a>`;

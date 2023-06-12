class DetailsCtrl {
  constructor(id) {
    $("#ouvrirCarte").click(() => {
        indexCtrl.loadCarte();
    });
    $("#accueil").click(() => {
        indexCtrl.loadJeux();
    });
    http.getJeuAvecId(id, (jeu)=>{
        $("#titreJeu").value=jeu.title;
        $("#descriptionJeu").value=jeu.description;
    });
  }

}

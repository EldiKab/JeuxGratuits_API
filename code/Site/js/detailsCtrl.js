class DetailsCtrl {
  constructor(id) {
    $("#ouvrirCarte").click(() => {
        indexCtrl.loadCarte();
    });
    $("#accueil").click(() => {
        indexCtrl.loadJeux();
    });
    http.getJeuAvecId(id, (jeu)=>{
        $("#titreJeu").text(jeu.title);
        $("#descriptionJeu").text(jeu.description);
        $("#genreJeu").text(jeu.genre);
        $("#plateformeJeu").text(jeu.platform);
        $("#developpeursJeu").text(jeu.developer);
        $("#datesortieJeu").text(jeu.release_date);
        $("<img src='" + jeu.thumbnail+"'</img>").appendTo("#imageJeu");
    });
  }
}

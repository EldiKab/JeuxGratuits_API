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
        $("#genreJeu").text("Genre: "+jeu.genre);
        $("#plateformeJeu").text("Plateforme: "+jeu.platform);
        $("#developpeursJeu").text("Developpeurs: "+jeu.developer);
        $("#datesortieJeu").text("Date de sortie: "+jeu.release_date);
        $("#imageJeu").attr("src", jeu.thumbnail);
        $("#imageJeu1").attr("src", jeu.screenshots[0].image);
        $("#imageJeu2").attr("src", jeu.screenshots[1].image);
        $("#imageJeu3").attr("src", jeu.screenshots[2].image);
        $("#imageJeu4").attr("src", jeu.screenshots[3].image);
        $("#lienJeu").attr("href", jeu.game_url);
        $("#lienJeu").text(jeu.game_url);
    });
  }
}

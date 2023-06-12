class JeuxCtrl {
  constructor() {
    http.getAllJeux((data) => {
      this.afficherJeux(data);
      //this.listeDeroulanteGenre(data);
      //this.listeDeroulantePlateforme(data);
    });
    $("#buttonNomJeu").click(() => {
      this.filtreNomJeu();
    });
    $("#buttonFiltreJeu").click(() => {
      this.filtreJeu();
    });
    $("#ouvrirCarte").click(() => {
      indexCtrl.loadCarte();
    });
  }
  listeDeroulanteGenre(jeux) {
    let liste = document.getElementById("cmboxGenre");
    let genres;
    for (let i = 0; i < jeux.length; i++) {
      genres.push(jeux[i].genre);
    }
    let genresFiltres = genres.filter((x, i) => genres.indexOf(x) === i);
    for (let i = 0; i < genresFiltres.length; i++) {
      let opt = document.createElement("option");
      opt.value = genresFiltres[i];
      opt.innerHTML = genresFiltres[i];
      liste.appendChild(opt);
    }
  }
  listeDeroulantePlateforme(jeux) {
    let liste = document.getElementById("cmboxPlateforme");
    let plateformes;
    for (let i = 0; i < jeux.length; i++) {
      plateformes.push(jeux[i].platform);
    }
    let plateformesFiltres = plateformes.filter(
      (x, i) => plateformes.indexOf(x) === i
    );
    for (let i = 0; i < plateformesFiltres.length; i++) {
      let opt = document.createElement("option");
      opt.value = plateformesFiltres[i];
      opt.innerHTML = plateformesFiltres[i];
      liste.appendChild(opt);
    }
  }
  afficherJeux(jeux) {
    let conteneur = document.getElementById("jeux");
    for (let i = 0; i < jeux.length; i++) {
      let jeu = document.createElement("div");
      let image = document.createElement("img");
      image.src = jeux[i].thumbnail;
      let titre = document.createElement("p");
      titre.innerHTML = jeux[i].title;
      let table = document.createElement("table");
      let tbody = document.createElement("tbody");
      let tr = document.createElement("tr");
      let genretd = document.createElement("td");
      genretd.innerHTML = jeux[i].genre;
      let plateformetd = document.createElement("td");
      plateformetd.innerHTML = jeux[i].platform;
      tr.appendChild(genretd);
      tr.appendChild(plateformetd);
      tbody.appendChild(tr);
      table.appendChild(tbody);
      jeu.appendChild(image);
      jeu.appendChild(titre);
      jeu.appendChild(table);
      conteneur.appendChild(jeu);
    }
  }
  filtreJeu() {
    let genre = document.getElementById("cmboxGenre").value;
    let plateforme = document.getElementById("cmboxPlateforme").value;
    let jeux = http.getJeuxFiltre(genre, plateforme);
    this.afficherJeux(jeux);
  }
  filtreNomJeu() {
    let titre = document.getElementById("#textfNomJeu").value;
    let jeux = http.getJeuAvecTitre(titre);
    afficherJeux(jeux);
  }
}

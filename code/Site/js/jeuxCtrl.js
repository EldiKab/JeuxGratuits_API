class JeuxCtrl {
  constructor() {
    http.getAllJeux((data) => {
      this.afficherJeux(data);
      this.listeDeroulanteGenre(data);
      this.listeDeroulantePlateforme(data);
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
    let genres=[];
    for (let i = 0; i < jeux.length; i++) {
      genres.push(jeux[i].genre);
    }
    let genresFiltres = genres.filter((x, i) => genres.indexOf(x) === i);
    let optAll = document.createElement("option");
    optAll.value="all";
    optAll.innerHTML="all";
    liste.appendChild(optAll);
    for (let i = 0; i < genresFiltres.length; i++) {
      let opt = document.createElement("option");
      opt.value = genresFiltres[i];
      opt.innerHTML = genresFiltres[i];
      liste.appendChild(opt);
    }
  }
  listeDeroulantePlateforme(jeux) {
    let liste = document.getElementById("cmboxPlateforme");
    let plateformes=[];
    for (let i = 0; i < jeux.length; i++) {
      plateformes.push(jeux[i].platform);
    }
    let plateformesFiltres = plateformes.filter((x, i) => plateformes.indexOf(x) === i
    );
    for (let i = 0; i < plateformesFiltres.length; i++) {
      let opt = document.createElement("option");
      opt.value = plateformesFiltres[i];
      opt.innerHTML = plateformesFiltres[i];
      liste.appendChild(opt);
    }
  }
  afficherJeux(jeux) {
    $("#jeux").empty();
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
      tr.classList.add("trInfosJeu");
      let genretd = document.createElement("td");
      genretd.classList.add("genretd");
      genretd.innerHTML = jeux[i].genre;
      let plateformetd = document.createElement("td");
      plateformetd.classList.add("plateformetd");
      plateformetd.innerHTML = jeux[i].platform;
      tr.appendChild(genretd);
      tr.appendChild(plateformetd);
      tbody.appendChild(tr);
      table.appendChild(tbody);
      jeu.appendChild(image);
      jeu.appendChild(titre);
      jeu.appendChild(table);
      jeu.classList.add("jeu");
      jeu.addEventListener("click", function () {
        indexCtrl.loadDetails(jeux[i].id);
      });
      conteneur.appendChild(jeu);
    }
  }
  afficherJeu(jeu) {
    $("#jeux").empty();
    let conteneur = document.getElementById("jeux");
    let jeuDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = jeu.thumbnail;
    let titre = document.createElement("p");
    titre.innerHTML = jeu.title;
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let genretd = document.createElement("td");
    genretd.innerHTML = jeu.genre;
    let plateformetd = document.createElement("td");
    plateformetd.innerHTML = jeu.platform;
    tr.appendChild(genretd);
    tr.appendChild(plateformetd);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    jeuDiv.appendChild(image);
    jeuDiv.appendChild(titre);
    jeuDiv.appendChild(table);
    jeuDiv.classList.add("jeu");
    jeuDiv.addEventListener("click", function () {
      indexCtrl.loadDetails(jeu.id);
    });
    conteneur.appendChild(jeuDiv);
  }
  filtreJeu() {
    let genreSelected = $("#cmboxGenre option:selected").text();
    let genre=genreSelected.toLowerCase();
    let genreSansEspace = genre.replace(" ", "-");
    if(genreSansEspace=="card-game"){
      genreSansEspace="card";
    }
    if(genreSansEspace.includes("arpg")){
      genreSansEspace.replace("arpg", "action-rpg");
    }
    
    let plateformeSelected = $("#cmboxPlateforme option:selected").text();
    let plateforme = "";
    if(plateformeSelected=="PC (Windows)"){
      plateforme="pc";
    }
    if(plateformeSelected=="Web Browser"){
      plateforme="browser"
    }
    if(plateformeSelected=="PC (Windows), Web Browser"){
      plateforme="all";
    }
    http.getJeuxFiltre(genreSansEspace, plateforme, (jeux) => {
      this.afficherJeux(jeux);
    });
  }
  filtreNomJeu() {
    let titre = document.getElementById("textfNomJeu").value;
    if (titre == "") {
      http.getAllJeux((data) => {
        this.afficherJeux(data);
      });
    } else {
      let id = "";
      http.getAllJeux((jeux) => {
        let jeuxAvecNom=[];
        for (let i = 0; i < jeux.length; i++) {
          if (jeux[i].title.startsWith(titre)) {
            id = jeux[i].id;
            http.getJeuAvecId(id, (jeu) => {
              jeuxAvecNom.push(jeu);
              this.afficherJeux(jeuxAvecNom);
            });
            
          }
        }
        if (id == "") {
          alert("Jeu non trouvé");
        }
      });
    }
  }
}

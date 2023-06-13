class DetailsCtrl {
  constructor(id) {
    this.slideIndex = 1;

    $("#ouvrirCarte").click(() => {
      indexCtrl.loadCarte();
    });
    $("#accueil").click(() => {
      indexCtrl.loadJeux();
    });
    http.getJeuAvecId(id, (jeu) => {
      $("#titreJeu").text(jeu.title);
      $("#descriptionJeu").text(jeu.description);
      $("#genreJeu").text("Genre: " + jeu.genre);
      $("#plateformeJeu").text("Plateforme: " + jeu.platform);
      $("#developpeursJeu").text("Developpeurs: " + jeu.developer);
      $("#datesortieJeu").text("Date de sortie: " + jeu.release_date);
      $("#imageJeu").attr("src", jeu.thumbnail);
      $("#imageJeu1").attr("src", jeu.screenshots[0].image);
      $("#imageJeu2").attr("src", jeu.screenshots[1].image);
      $("#imageJeu3").attr("src", jeu.screenshots[2].image);
      $("#lienJeu").attr("href", jeu.game_url);
      $("#lienJeu").text(jeu.game_url);
    });
    $("#dot1").click(() => {
      this.currentSlide(1);
    });
    $("#dot2").click(() => {
      this.currentSlide(2);
    });
    $("#dot3").click(() => {
      this.currentSlide(3);
    });
    $("#prev").click(() => {
      this.plusSlides(-1);
    });
    $("#next").click(() => {
      this.plusSlides(1);
    });
    this.showSlides(this.slideIndex);
  }
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }
  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }
  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
}

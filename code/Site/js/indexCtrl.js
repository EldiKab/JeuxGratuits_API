/*
  But :    Contrôleur de index
  Auteur : Eldi Kabashi
  Date :   06.06.2023 / V1.0
*/

$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  http = new HttpService();
  indexCtrl = new IndexCtrl();  // ctrl principal
  http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
});

class IndexCtrl {
  constructor() {
    this.vue = new VueService();
    this.loadJeux();
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  loadJeux() {
    this.vue.chargerVue("jeux", function() {
      new JeuxCtrl();
    });
  }

  loadDetails() {
    this.vue.chargerVue("details", () =>  new DetailsCtrl());
  }

  loadCarte() {
    this.vue.chargerVue("carte", () =>  new CarteCtrl());
  }
}

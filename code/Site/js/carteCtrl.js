class CarteCtrl {
  constructor() {
    $("#ouvrirCarte").click(() => {
      indexCtrl.loadCarte();
    });
    $("#accueil").click(() => {
      indexCtrl.loadJeux();
    });
    
  }
}

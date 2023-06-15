class CarteCtrl {
  constructor() {
    $("#ouvrirCarte").click(() => {
      indexCtrl.loadCarte();
      console.log("aaa");
    });
    $("#accueil").click(() => {
      indexCtrl.loadJeux();
    });
    this.initialiserCarte();
  }
  initialiserCarte(){
    console.log("aa");
    let mapid = L.map("mapid").setView([-33.85690535797353, 151.2153662901801], 13);
    console.log(mapid);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapid);
  console.log("a");

  L.marker([30.72592, -97.68633])
    .addTo(mapid)
    .bindPopup("Blizzard Entertainment")
  L.marker([34.34145, -118.50140])
    .addTo(mapid)
    .bindPopup("Riot Games");
  L.marker([48.844446, 2.42363])
    .addTo(mapid)
    .bindPopup("Ubisoft");
  L.marker([36.05902, 135.80217])
    .addTo(mapid)
    .bindPopup("Nintendo");
  L.marker([39.25276, 139.88455])
    .addTo(mapid)
    .bindPopup("Square Enix");
  L.marker([48.47952, -122.51414])
    .addTo(mapid)
    .bindPopup("Microsoft");
  }
}

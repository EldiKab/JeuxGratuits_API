/*
 * Couche de services HTTP (worker). 
 *
 * @author Jean-Claude Stritt / modif Eldi Kabashi
 */
class VueService {
  constructor() {}

    chargerVue(vue, callback) {

    // charger la vue demandee
    $("#view").load("views/" + vue + ".html", function () {

      // si une fonction de callback est spécifiée, on l'appelle ici
      if (typeof callback !== "undefined") {
        callback();
      }

    });
  }

}

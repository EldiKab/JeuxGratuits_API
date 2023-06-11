/*
 * Couche de services HTTP (worker). 
 *
 * @author Jean-Claude Stritt / modif Eldi Kabashi
 */
class HttpService {
  constructor() {}

  /*
  **  $.ajaxSetup permet de définir une fois un élément sans le refaire par la suite. Ici cela se fait l'error
  */
  centraliserErreurHttp(httpErrorCallbackFn) {
    $.ajaxSetup({
      error: function (xhr, exception) {
        let msg;
        if (xhr.status === 0) {
          msg = "Pas d'accès à la ressource serveur demandée !";
        } else if (xhr.status === 404) {
          msg = "Page demandée non trouvée [404] !";
        } else if (xhr.status === 500) {
          msg = "Erreur interne sur le serveur [500] !";
        } else if (exception === "parsererror") {
          msg = "Erreur de parcours dans le JSON !";
        } else if (exception === "timeout") {
          msg = "Erreur de délai dépassé [Time out] !";
        } else if (exception === "abort") {
          msg = "Requête Ajax stoppée !";
        } else {
          msg = "Erreur inconnue : \n" + xhr.responseText;
        }
        httpErrorCallbackFn(msg);
      },
    });
  }

  /*
  */
  getAllJeux(successCallBack) {
    $.ajax({
      url: "https://www.freetogame.com/api/games",
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallBack,
    });
  }
  getJeuAvecTitre(titre, successCallBack){
    $.ajax({
      url: "https://www.freetogame.com/api/games?title=" + titre,
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallBack,
    });
  }
  getJeuxFiltre(genre, plateforme, developper, successCallBack){
    if(genre!=null && plateforme!=null && developper!=null){
      $.ajax({
        url: "https://www.freetogame.com/api/games?category=" + genre + "&platform="+plateforme + "&developer="+developper,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallBack,
      });
    }
    if(genre==null && plateforme!=null && developper!=null){
      $.ajax({
        url: "https://www.freetogame.com/api/games?platform="+plateforme + "&developer="+developper,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallBack,
      });
    }
    if(genre!=null && plateforme==null && developper!=null){
      $.ajax({
        url: "https://www.freetogame.com/api/games?category=" + genre  + "&developer="+developper,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallBack,
      });
    }
    if(genre!=null && plateforme!=null && developper!=null){
      $.ajax({
        url: "https://www.freetogame.com/api/games?category=" + genre + "&platform="+plateforme + "&developer="+developper,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallBack,
      });
    }
    if(genre!=null && plateforme!=null && developper==null){
      $.ajax({
        url: "https://www.freetogame.com/api/games?category=" + genre + "&platform="+plateforme,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallBack,
      });
    }
    if(genre!=null && plateforme==null && developper==null){
      $.ajax({
        url: "https://www.freetogame.com/api/games?category=" + genre,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallBack,
      });
    }
    if(genre==null && plateforme!=null && developper==null){
      $.ajax({
        url: "https://www.freetogame.com/api/games?platform="+plateforme,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallBack,
      });
    }
    if(genre==null && plateforme==null && developper!=null){
      $.ajax({
        url: "https://www.freetogame.com/api/games?developer="+developper,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallBack,
      });
    }
    if(genre==null && plateforme==null && developper==null){
      this.getAllJeux;
    }
  }
}

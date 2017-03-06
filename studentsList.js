// Write yout Javascript code in this files
var request = new XMLHttpRequest(); // on crée une instance de la fonction HTTPRequest. Je la stocke dans la variable request
request.open('GET', 'students.json', true); // On déclare où on fait la rzquête. GET = je veux obtenir des données. TRUE = les requêtes peuvent se faire après le chargement de la page
request.onreadystatechange = function (aEvt) { // cette fonction s'exécute à chaque fois que readyState change
  if (request.readyState == 4) { // 4 = requête terminée
     if(request.status == 200) { // tout s'est bien passé
      var students = JSON.parse(request.responseText);
      console.log(students);
    } else {
      dump("Erreur pendant le chargement de la page.\n");
    } // sinon affiche cette erreur
  }
};

request.send();

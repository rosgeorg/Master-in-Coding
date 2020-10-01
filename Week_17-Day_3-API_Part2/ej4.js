/* 4.- Hacer una peticion y devolver el género de la banda deseada
    http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse */

const request = require("request");

function genderByBand(nombreBanda) {
  var replaced = nombreBanda.replace(/ /g, "+");
  request.get(
    `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${replaced}`,
    (error, response, body) => {
      if (response.statusCode === 200) {
        const bandInfo = JSON.parse(body);
        let genre = bandInfo.artists.map((object) => {
          return object.strGenre;
        });
        console.log("Género musical de " + nombreBanda + ":");
        console.log(genre);
      } else {
        console.log("Hay un error con la petición");
      }
    }
  );
}

genderByBand("rolling stones");

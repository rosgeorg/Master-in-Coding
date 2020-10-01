/* 4.- Hacer una petición a la swapi a un personaje y obtener 
   el titulo de la primera pelicula. https://swapi.co/ */

const request = require("request");

function characterAndMovieById(id) {
  request.get(
    `https://swapi.dev/api/people/${id}/`,
    (error, response, body) => {
      if (response.statusCode === 200) {
        const characterInfo = JSON.parse(body);
        console.log("Character: " + characterInfo.name);
        request.get(characterInfo.films[0], (err, response, body) => {
          const movieInfo = JSON.parse(body);
          console.log("First appereance: " + movieInfo.title);
        });
      } else {
        console.log("Hay un error con la petición");
      }
    }
  );
}

characterAndMovieById("1");

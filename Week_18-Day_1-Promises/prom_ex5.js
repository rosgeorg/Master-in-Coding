/* 5.- Hacer una petición a la swapi a un personaje y obtener 
   el titulo de la primera pelicula. https://swapi.co/ */

   const request = require("request");

   function getPeopleById(id) {
     return new Promise((resolve, reject) => {
       request.get(`https://swapi.dev/api/people/${id}`, (err, response, body) => {
         if (response.statusCode == 200) {
           const json = JSON.parse(body);
           resolve(json);
         } else {
           reject("Tuvimos un error!");
         }
       });
     });
   }
   
   function getMovieByUrl(movieUrl) {
     return new Promise((resolve, reject) => {
       request.get(movieUrl, (err, response, body) => {
         if (response.statusCode === 200) {
           const json = JSON.parse(body);
           resolve(json);
         } else {
           reject("Error en películas");
         }
       });
     });
   }
   
/*    getPeopleById(14)
     .then((people) => {
       console.log(people.name);
       return getMovieByUrl(people.films[0]);
     })
     .then((movie) => {
       console.log(movie.title);
     })
     .catch((err) => {
       console.log("Catch: " + err);
     }); */
   
   getPeopleById(20).then((people) =>{
     console.log(people.name);
     getMovieByUrl(people.films[0])
       .then((movie) => console.log(movie.title))
       .catch((err) => console.log(err))
   });
   
   
   
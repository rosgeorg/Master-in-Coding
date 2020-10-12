/* 3.- Hacer una petición por author y devolver la lista de sus libros
http://openlibrary.org/search.json?author=asimov */

const request = require('request');

function peticionAutor(nombreAutor) {
    var replaced = nombreAutor.replace(/ /g, '+');
    console.log('Libros escritos por '+nombreAutor+ ':');
    return new Promise((resolve, reject) => {
        request.get(
            `http://openlibrary.org/search.json?author=${replaced}`,
             (error, response, body) => {
               if(response.statusCode === 200){
                 const authorInfo = JSON.parse(body);
                 resolve(authorInfo);
               }else{
                   reject("Hay un error con la petición");
               }
             }
           );
    }); 
}
  
peticionAutor('r r martin')
    .then((authorInfo) => {
        let booksByAuthor = authorInfo.docs.map((object) => {
            return object.title;
        });
        console.log(booksByAuthor);
    })
    .catch((error) => {
      console.log("CATCH: " + error);
    });

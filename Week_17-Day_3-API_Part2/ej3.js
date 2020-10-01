/* 3.- Hacer una petición por author y devolver la lista de sus libros
http://openlibrary.org/search.json?author=asimov */

const request = require("request");

function peticionLibro(nombreAutor){
    var replaced = nombreAutor.replace(/ /g, '+');
    request.get(
       `http://openlibrary.org/search.json?author=${replaced}`,
        (error, response, body) => {
          if(response.statusCode === 200){
            const authorInfo = JSON.parse(body);
            let booksByAuthor = authorInfo.docs.map((object) => {
                return object.title;
            });
            console.log('Libros escritos por '+nombreAutor+ ':');
            console.log(booksByAuthor);
          }else{
              console.log("Hay un error con la petición");
          }
        }
      );
}

peticionLibro('j k rowling')
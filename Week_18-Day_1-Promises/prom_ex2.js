/* 2.- Hacer una función que haga una petición (Ejemplo: peticionLibro("i robot");    
Buscar el primer libro e imprimir la lista de author_name (FOR) y el title_suggest 
http://openlibrary.org/search.json?q=i+robot)  */

const request = require('request');

function peticionLibro(nombreLibro) {
    var replaced = nombreLibro.replace(/ /g, '+');
    console.log(replaced);
    return new Promise((resolve, reject) => {
        request.get(
       `http://openlibrary.org/search.json?q=${replaced}`,
        (error, response, body) => {
          if(response.statusCode === 200){
            const bookInfo = JSON.parse(body);
            resolve(bookInfo);
          }else{
            reject("Hay un error con la petición");
          }
        }
      );
    }); 
}
  
peticionLibro('i robot')
    .then((bookInfo) => {
        let author = bookInfo.docs[0].author_name.map((element) => {
            return element;
        });
        console.log(author);
        console.log(bookInfo.docs[0].title_suggest);
    })
    .catch((error) => {
      console.log("CATCH: " + error);
    });

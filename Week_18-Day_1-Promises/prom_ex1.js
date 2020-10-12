// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos. (FOR)

const request = require('request');

function getTypesByName(pokemonName) {

    return new Promise((resolve, reject) => {
        request.get(
            "https://pokeapi.co/api/v2/pokemon/" + pokemonName +'/',
            (error, response, body) => {
              if(response.statusCode === 200){
                const pokeInfo = JSON.parse(body);
                resolve(pokeInfo)
              }else{
                reject('Tuvimos un error!')
              }
            }
        );
    }); 
}
  
getTypesByName('charizard')
    .then((poke) => {
        let types = poke.types.map((object) => {
            return object.type.name;
        })
        console.log(types);
    })
    .catch((error) => {
      console.log("CATCH: " + error);
    });

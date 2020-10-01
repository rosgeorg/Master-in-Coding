// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos. (FOR)

const request = require("request");

function getTypesByName(pokemonName){
    request.get(
        "https://pokeapi.co/api/v2/pokemon/" + pokemonName +'/',
        (error, response, body) => {
          if(response.statusCode === 200){
            const pokeInfo = JSON.parse(body);
            let types = pokeInfo.types.map((object) => {
                return object.type.name;
            })
            console.log(types);
          }else{
              console.log("Hay un error con la petición");
          }
        }
      );
}

getTypesByName('charizard')

const request = require("request");

request.get(
  "https://pokeapi.co/api/v2/pokemon/pikachu",
  (error, response, body) => {
    console.log(response.statusCode);
    console.log(error);
    const pokemon = JSON.parse(body);
    console.log(pokemon.id);
  }
);

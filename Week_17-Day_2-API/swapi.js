const request = require("request");

request.get("https://swapi.dev/api/people/1", (error, response, body) => {
  console.log(response.statusCode);
  console.log(JSON.parse(body));
});

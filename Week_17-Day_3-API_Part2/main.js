const request = require("request");

function getPeopleById(id) {
  request.get(`https://swapi.dev/api/people/${id}`, (error, response, body) => {
    if (response.statusCode === 200) {
      const bodyEnFormatoJSON = JSON.parse(body);
      console.log(bodyEnFormatoJSON);
    } else {
      console.log("Tuvimos un error, intenta más tarde");
    }
  });
}

getPeopleById(14);

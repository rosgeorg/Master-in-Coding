/* 4.- Hacer una peticion y devolver el género de la banda deseada
    http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse */

const request = require('request');

function genderByBrand(nombreBanda) {
    var replaced = nombreBanda.replace(/ /g, '+');
    console.log('Género musical de ' + nombreBanda + ':');
    return new Promise((resolve, reject) => {
        request.get(
            `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${replaced}`,
            (error, response, body) => {
                if (response.statusCode === 200) {
                    const bandInfo = JSON.parse(body);
                    resolve(bandInfo);
                } else {
                    reject("Hay un error con la petición");
                }
            }
        );
    });
}

genderByBrand('metallica')
    .then((bandInfo) => {
        let genre = bandInfo.artists.map((object) => {
            return object.strGenre;
        });
        console.log(genre);
    })
    .catch((error) => {
        console.log("CATCH: " + error);
    });

import axios from 'axios';
import Game from './Game'
import './styles/main.scss';

function init(){
    axios.get('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            //Aquí se obtienen los paises
            console.log(response.data);//data es donde viene la información que se busca
            const game = new Game(response.data);
            game.start();
        })
        .catch((error) => {
            //aquí se pasa un error si ocurre al tratar de traer los paises
        })
}

init();
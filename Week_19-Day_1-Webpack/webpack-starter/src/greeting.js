const greeting = (name) => {
    return `Hola ${name}, saludos desde JS`
}

export default greeting; //Hago accesible mi función greeting para otros archivos de JS
//module.exports es similar a export default

//Diferencia module.export ewstá escrito en JS vanilla
//export default es para babel y ES6
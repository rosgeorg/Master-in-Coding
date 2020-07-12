(function(){

    "use strict"
    
    var nombre = document.getElementById('nombre');
    console.log(nombre);
    var email = document.getElementById('email');
    console.log(email);
    var tel = document.getElementById('tel');
    console.log(tel);
    var tipo = document.getElementById('tipo');
    console.log(tipo);
    var guardar = document.getElementById('guardar');
    console.log(guardar);

    function validarForm(nombre, email, tel, tipo){
        if(nombre.value !== "" && email.value !== "" && tel.value !== "" && tipo.value !== "0"){
            return true;
        }else{
            return false;
        }
    }

    guardar.addEventListener('click', function(){ //función anónima
        console.log('le di clic');
        if(validarForm(nombre, email, tel, tipo)){
            var tabla = document.querySelector('.table'); //va a buscar un tag de html con 
            console.log(tabla);
            var row = document.createElement('div');
            row.classList.add('row');
            row.innerHTML = "<div class='column'>" + nombre.value + "</div>" 
            + "<div class='column'>" + email.value + "</div>" 
            + "<div class='column'>" + tel.value + "</div>" 
            + "<div class='column'>" + tipo.value + "</div>" ;
            console.log(row);
            tabla.appendChild(row);
        }else{
            alert('Favor de llenar todos los datos')
        }
        console.log('nombre: ', nombre.value);
        console.log('E-mail: ', email.value);
        console.log('Teléfono: ', tel.value);
        console.log('Tipo de Contacto: ', tipo.value);
    });

    /*function clickGuardar(){
        console.log('click desde la función con nombre');
    }

    guardar.addEventListener('click', clickGuardar)*/

})() //IIFE Immediatal Invoked Function Expressions
//Proteje mis variables desde la consola del navegador
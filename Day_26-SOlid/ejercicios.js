/* 1. Haz una clase llamada Persona que siga las siguientes condiciones:
	Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
    calcularIMC()
	esMayorDeEdad()
	El constructor pide nombre, edad,sexo,peso y altura
    Generar el RFC a partir de el nombre, edad y sexo */

/*  2.  Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	-Titular y cantidad
	-ingresar(cantidad)
	-retirar(cantidad)
	Hacer las validaciones previas
	Como regla de negocio no debe de tener más de $900 y menos de $10
 */



class Persona {

    constructor(nombre, apellidoP, apellidoM, edad, diaN, mesN, añoN, rfc, sexo, peso, altura) {
        this.nombre = nombre
        this.apeelidoPaterno = apellidoP
        this.apellidoMaterno = apellidoM
        this.diaNacimiento = diaN
        this.mesNacimiento = mesN
        this.añoNacimiento = añoN
        this.edad = edad
        this.rfc = rfc
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        console.log(this.nombre.length);
        var IMC = this.peso/((this.altura/100)*(this.altura/100))
        console.log(IMC);
    }

    esMayorDeEdad(){
        if(this.edad >= 18){
            console.log("Puedes pasar");
        }else{
            console.log("Ve a la choza de los pequeñines");
        }
    }

}

var persona1 = new Persona("Raul", "Arosemena", "Salgado", 25, 30, 03, 1995, "", "M", 80, 180);
persona1.calcularIMC();
persona1.esMayorDeEdad();

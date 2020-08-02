/* 1. Haz una clase llamada Persona que siga las siguientes condiciones:
	Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
    calcularIMC()
	esMayorDeEdad()
	El constructor pide nombre, edad,sexo,peso y altura
    Generar el RFC a partir de el nombre, edad y sexo */

class Persona {

    constructor(nombre, apellidoP, apellidoM, edad, diaN, mesN, añoN, rfc, sexo, peso, altura) {
        this.nombre = nombre
        this.apellidoPaterno = apellidoP
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
        var IMC = this.peso / ((this.altura / 100) * (this.altura / 100))
        console.log(IMC);
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log("Puedes pasar");
        } else {
            console.log("Ve a la choza de los pequeñines");
        }
    }

    calcularRFC() {
        var str = '';
        var ref = 'abcdefghijklmnñopqrstuvwxyz';
        for (var i = 0; i < 2; i++) {
            str += ref.charAt(Math.floor(Math.random() * ref.length));
        }
        var aleatorio = Math.round(Math.random()*10);
        var vocal;
        for (var i = 0; i < this.apellidoMaterno.length; i++) {
            if (this.apellidoPaterno[i] == 'a' || this.apellidoPaterno[i] == 'e' || this.apellidoPaterno[i] == 'i' || this.apellidoPaterno[i] == 'o' || this.apellidoPaterno[i] == 'u') {
                vocal = this.apellidoPaterno[i]
                break;
            }
        }
        this.rfc = this.apellidoPaterno[0] + vocal.toUpperCase() + this.apellidoMaterno[0] + this.nombre[0] + this.añoNacimiento[2] + this.añoNacimiento[3] + this.mesNacimiento + this.diaNacimiento + str.toUpperCase() + aleatorio;
        console.log(this.rfc);
    }

}

var persona1 = new Persona("Raul", "Arosemena", "Salgado", 25, "30", "03", "1995", "", "M", 80, 180);
persona1.calcularIMC();
persona1.esMayorDeEdad();
persona1.calcularRFC();


/*  2.  Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	-Titular y cantidad
	-ingresar(cantidad)
	-retirar(cantidad)
	Hacer las validaciones previas
	Como regla de negocio no debe de tener más de $900 y menos de $10
 */

class Cuenta {

    constructor(titular) {
        this.titular = titular;
        this.cantidad = 0;
    }

    ingresar(deposito) {
        var enCuenta = this.cantidad += deposito;
        if(enCuenta < 10 || enCuenta > 900){
            console.log("El saldo de tu cuenta no puede ser menor que $10.00 ni mayor que $900.00");
        }else{
            enCuenta
            console.log("La cantidad en la cuenta de " + this.titular + " es de " + this.cantidad);
        }
    }
}

var Cuentahabiente = new Cuenta("Carlos Perez");
Cuentahabiente.ingresar(200);

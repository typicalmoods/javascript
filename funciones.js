//Funciones

//Funciones declarativas

function miPrimeraFuncion() {
    return 23;
};

console.log("Resultado de mi primera función: " + miPrimeraFuncion());


function miSegundaFuncion(numero1, numero2) {
    return numero1 + numero2;
};

var num1 = 50;
var num2 = 2;

console.log("Resultado de mi segunda función: " + miSegundaFuncion(num1, num2));

function miTerceraFuncion(num1, num2) {
    var result = num1 * num2;
    return result - 2;
};

console.log("Resultado de mi tercera función: " + miTerceraFuncion(num1, num2));


//Funciones de tipo Expresión

var tipoDos = function () {
    return 12;
}

console.log("Resultado de tipoDos: " + tipoDos());


//Templates Literals


function miNombre(nom) {
    var nombre = `${nom}`;
    return nombre;
}

console.log("Resultado de miNombre: " + miNombre("Ann"));


//Expresión de Función

var saludar = function(nombre) {
    console.log(`Hola, persona llamada: ${nombre}`)
}

console.log(saludar("Muñoz"));

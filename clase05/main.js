// Microdesafio I
function test(x, y) {
  return y - x;
}
console.log(test(10, 40));
// Microdesafio II
function test2(x, y) {
  return x * 2;
  console.log(x);
  return x / 2;
}
console.log(test2(10, 40));

// Funciones simples:
/* Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/
let inTocm = (val) => val * 2.54;
console.log(inTocm(1));

/* Crear una función que recibe un string y lo convierte en una URL.Ej: “pepito” es devuelto como “http://www.pepito.com” */
let wordToUrl = (val) => `http://www.${val}.com`;
console.log(wordToUrl("pepito"));

/* Crear una función que recibe un string y devuelve la misma frase pero con admiración.*/
let admiration = (val) => `¡¡¡¡${val}!!!!`;
console.log(admiration("Hoy es un gran dia"));

/* Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.*/
let dogAge = (val) => val * 7;
console.log(dogAge(14));

/* Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.*/
let calculadorIMC = (height, weight) => weight / height ** 2;
console.log(calculadorIMC(1.76, 84));
console.log(calculadorIMC(1.65, 70));
console.log(calculadorIMC(1.55, 45));

/* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. Investigá qué hace el método de strings .toUpperCase()*/
let mayusText = (val) => val.toUpperCase();
console.log(mayusText("Hola mundo"));

/* Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof.*/
let dataType = (val) => typeof val;
console.log(dataType("Mundo"));
console.log(dataType(true));
console.log(dataType(20));
console.log(dataType(20.5));
console.log(dataType([]));
console.log(dataType({}));

/* Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.*/
let circunference = (val) => 2 * Math.PI * val;
console.log(circunference(15));

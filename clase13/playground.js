// Dado los siguientes numeros:
let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.
// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.
let maxNumber = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  console.log(max);
};

maxNumber([num1, num2, num3]);

// Ahora bien. dado los siguientes numeros:
let n1 = 13;
let n2 = 1663;
let n3 = 3363;
// agrega una variable mas, llamada num4
// con un valor numerico
let n4 = -15;
// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.
let numArray = [n1, n2, n3, n4];
// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.
maxNumber(numArray);

/**
 * Extra: que puedes hacer para identificar
 * el numero mayor de una lista de numeros,
 * como la siguiente? Utiliza Javascript.
 *
 * Tip: es valido buscar en google :)
 *
 * Adicional: al terminar tu algoritmo,
 * cambia los valores de la lista, bien sea
 * agregando o removiendo, y asegurate
 * que tu algoritmo funcione con cualquier lista
 * de numeros
 */
const numeros = [5, 12, 2, 40, 33, 2, 8];
console.log(numeros.sort((a, b) => a - b).pop());

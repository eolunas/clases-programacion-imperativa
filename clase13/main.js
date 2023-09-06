// Ejercitación de algoritmos
/* Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz” */
let fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    result = (i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i;
    console.log(result);
  }
};
fizzbuzz();

/* Escriban una función que reciba dos parámetros: un array y un índice. La
función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6'. */
let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
var index = 1;

let arrayIndex = (array, index) => console.log(array[index]);
arrayIndex(array, index);

/* Escribir una función que, dado un número de mes, devuelva la cantidad
de días de ese mes —suponiendo que no es un año bisiesto— */
let daysPerMonth = (month) => {
  let dpm = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return dpm[month];
};
console.log(daysPerMonth(3));

/* Escribir una función de JavaScript que invierta un número. Por ejemplo,
si x = 32443, la salida debería ser 34423. */
let invNum = (num) => {
  num += "";
  let numInv = "";
  for (let index = 1; index <= num.length; index++) {
    numInv += num[num.length - index];
  }
  return numInv * 1;
};
console.log(invNum(32443));

/* Escribir una función que reciba una array y solo imprima los valores que
se repiten. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6,23,33,100'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
 */
let numDuplicated = (array, index) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        if (!result.includes(array[i])) result.push(array[i]);
      }
    }
  }
  console.log(result);
};
numDuplicated(array, index);

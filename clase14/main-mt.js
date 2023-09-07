/*
  Declara una variable que contenga una matriz
  de 5x5 llena de puros numeros enteros y positivos
 */
let m1 = [
  [1, 2, 3, 4, 5],
  [11, 12, 13, 14, 15],
  [21, 22, 23, 24, 25],
  [31, 32, 33, 34, 35],
  [41, 42, 43, 44, 45],
];

/*
  Luego, escribe un algoritmo para sumar todos
 los numeros en la matriz.
 */
let sumMatriz = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
};
console.log(sumMatriz(m1));

/* Crear una función que genere una matriz de 10x10. 
Cada fila debe tener solo 10 números. La matriz debe verse así:
 [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];
*/
let generarMatriz10por10 = () => {
  let array = [];
  for (let i = 1; i <= 10; i++) {
    array.push([]);
    for (let j = 1; j <= 10; j++) {
      array[i - 1].push((i - 1) * 10 + j);
    }
  }
  return array;
};

let matriz10por10 = generarMatriz10por10();
console.table(matriz10por10);

/* Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.*/
let sumDiagonalA = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i][i];
  }
  return sum;
};
console.log(sumDiagonalA(matriz10por10));

/* b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único.*/
let sumDiagonalB = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i][array.length - i - 1];
  }
  return sum;
};
console.log(sumDiagonalB(matriz10por10));
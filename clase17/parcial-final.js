// --------------------------- Ejercicio 1:
// Dado él siguiente array de paises
let paises = [
  {
    nombre: "Argentina",
    continente: "Sudamérica",
    poblacion: 40000000,
  },
  {
    nombre: "Colombia",
    continente: "Sudamérica",
    poblacion: 50372000,
  },

  {
    nombre: "Brasil",
    continente: "Sudamérica",
    poblacion: 300000000,
  },
  {
    nombre: "Etiopía",
    continente: "África",
    poblacion: 15000000,
  },
  {
    nombre: "Chile",
    continente: "Sudamérica",
    poblacion: 10000000,
  },
];
// Crear una función que reciba como parámetro él arreglo de objetos, un continente, y un número de población.
// La misma debe retornar un nuevo arreglo solo con los países que sean del continente pasado por parámetro, y además, que su población sea mayor o igual a la del parámetro.
// Si no encuentra coincidencias deberá retornar un array vacío
let filterData = (array, continent, population) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].continente == continent && array[i].poblacion >= population)
      newArray.push(array[i]);
  }
  return newArray;
};

console.log(filterData(paises, "Sudamérica", 50372000));
console.log(filterData(paises, "Africa", 50372000));

// --------------------------- Ejercicio 2:
//  Dado el siguiente array de numeros :
let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];
// Crear una función llamada bubbleSort que reciba como parámetros el array y un string que represente el sentido de ordenamiento, la función deberá realizar un ordenamiento interno del array según el orden indicado
// “ASC” lo ordenará ascendente
// “DESC” lo ordenará descendente
// Para analizar el correcto funcionamiento imprimir por consola el array antes y después de ejecutar la función.
let bubbleSort = (array, order) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      let condition =
        order == "ASC"
          ? array[j] > array[j + 1]
          : order == "DESC"
          ? array[j] < array[j + 1]
          : false;
      if (condition) {
        let pivot = array[j];
        array[j] = array[j + 1];
        array[j + 1] = pivot;
      }
    }
  }
  return array;
};

console.table(arrayDeNumeros);
console.table(bubbleSort(arrayDeNumeros, "ASC"));
console.table(bubbleSort(arrayDeNumeros, "DESC"));

// --------------------------- Ejercicio 3:
// Dada la matriz
let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];
// Crear una función que reciba la matriz por parámetro, sume todos los valores de la fila 1 y retorne la suma.
let rowSum = (matriz, row = 1) => {
  let sum = 0;
  for (let i = 0; i < matriz.length; i++) {
    sum += matriz[row][i];
  }
  return sum;
};
console.log(rowSum(matriz));

// Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz.
let pairNum = (matriz, row = 1) => {
  let newMatriz = [];
  for (let i = 0; i < matriz.length; i++) {
    newMatriz.push([]);
    for (let j = 0; j < matriz[i].length; j++) {
      if (!(matriz[i][j] % 2)) newMatriz[i].push(matriz[i][j]);
    }
  }
  return newMatriz;
};
console.table(matriz);
console.table(pairNum(matriz));

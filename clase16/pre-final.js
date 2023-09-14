/* PRE - EXAMEN FINAL */
//EJERCICIO Nº1
//Dada la matriz
// 3x3
let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];
/* 
1) Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. 
*/
let pairNumber = (array) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push([]);
    for (let j = 0; j < array.length; j++) {
      if (!(array[i][j] % 2)) newArr[i].push(array[i][j]);
    }
  }
  return newArr;
};

console.table(pairNumber(matriz));
/* ---------------------------------------------------------- */
//EJERCICIO Nº2
//Dado el siguiente arreglo de objetos:
let cuadros = [
  {
    nombre: "Mona Lisa",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La ultima cena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La noche estrellada",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "El grito",
    creador: "Edvard Munch",
  },
  {
    nombre: "Trigal con cuervos",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "Maria Magdalena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "Amor y Dolor",
    creador: "Edvard Munch",
  },
  {
    nombre: "Ansiedad",
    creador: "Edvard Munch",
  },
];
/* 
1) Realizar una función llamada filtrarPorCreador que reciba por parámetro el array y el nombre de un artista. Nuestra función deberá retornar un nuevo array que contenga los nombres de las obras de arte que ha realizado el creador recibido por parámetro. Por ejemplo, si se envía por parámetro: (cuadros, “Leonardo Da Vinci”). 
Nuestra función deberá retornar: 
("Mona Lisa", "La ultima cena", "Maria Magdalena")
*/
let filtrarPorCreador = (array, artist) => {
  let artworks = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].creador == artist) artworks.push(array[i].nombre);
  }
  return artworks;
};
console.log(filtrarPorCreador(cuadros, "Leonardo Da Vinci"));
/* ---------------------------------------------------------- */
// EJERCICIO Nº3
/* 
  Realizar una función que mediante el algoritmo de ordenamiento bubbleSort:
  1) indique si el arreglo de objetos del EJERCICIO Nº2 se encuentra ordenado alfabéticamente según su creador o no. 
  2) Si está ordenado deberá retornar true. Si no lo está, deberá ordenarlo.  
  3) Realizar el correspondiente llamado a esta función para demostrar su correcto funcionamiento.  
  */

let bubbleSortConf = (array, prop) => {
  let response = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j][prop] > array[j + 1][prop]) {
        let aux = array[j][prop];
        array[j][prop] = array[j + 1][prop];
        array[j + 1][prop] = aux;
        response = false;
      }
    }
  }
  return response ? response : array;
};
let response = bubbleSortConf(cuadros, "creador");
console.log(response);
console.log(bubbleSortConf(response, "creador"));
/* ---------------------------------------------------------- */
//EJERCICIO Nº4
/*  
  Desarrollar una función para cada uno de las siguientes apartados: 
*/
//1) Que reciba por parámetro un número entero y retorne su triple.
let triple = (a) => a * 3;
console.log(triple(4));
//2) Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.
let mult = (a, b) => a * b;
console.log(mult(4, 2));
//3) Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos.
let div = (a, b) => {
  res = a != 0 && b != 0 ? a / b : "Numeros no validos";
  return res;
};
console.log(div(4, 2));
console.log(div(0, 2));
/* ---------------------------------------------------------- */
//EJERCICIO Nº5

// Crear una matriz de 5 x 7.
let createMatriz = (row, column) => {
  let matriz = [];
  for (let i = 0; i < row; i++) {
    matriz.push([]);
    for (let j = 0; j < column; j++) {
      matriz[i].push(Math.floor(Math.random() * 10));
    }
  }
  return matriz;
};
let matriz5x7 = createMatriz(5, 7);
console.table(matriz5x7);

//Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la fila 4 y retorne la suma.
let sumRow = (matriz, row) => {
  let sum = 0;
  for (let i = 0; i < matriz[row].length; i++) {
    sum += matriz[row][i];
  }
  return sum;
};
console.log(sumRow(matriz5x7, 4));
/* ---------------------------------------------------------- */
//EJERCICIO Nº6
//Dado el siguiente arreglo de objetos:
let personas = [
  {
    nombre: "Lucia",
    oficio: "Medica",
    edad: 37,
  },
  {
    nombre: "Tiziano",
    oficio: "Programador",
    edad: 9,
  },
  {
    nombre: "Julian",
    oficio: "Chofer",
    edad: 45,
  },
  {
    nombre: "Adriana",
    oficio: "Chef",
    edad: 24,
  },
];

/* 1) Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las personas cuya edad sea mayor a 25. La función deberá retornar un nuevo arreglo con las personas que cumplan con la condición antes mencionada.*/
let filterMayorAge = (array, age) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].edad > age) newArr.push(array[i].edad);
  }
  return newArr;
};
/* 2) Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento. */
console.log(filterMayorAge(personas, 25));

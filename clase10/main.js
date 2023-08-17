//¿Qué devuelven estos códigos?:
let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);

let grupoDeAmigos = [
  "Harry",
  "Ron",
  "Hermione",
  "Spiderman",
  "Hulk",
  "Ironman",
  "Penélope Glamour",
  "Pierre Nodoyuna",
  "Patán",
];
console.log(grupoDeAmigos[5]);

let str = "un string cualquiera";
let arrayAleatorio = [
  "Digital",
  "House",
  "true",
  "string",
  "123",
  "false",
  "54",
  str,
];
console.log(arrayAleatorio[arrayAleatorio.length - 1]);

//Colecciones de películas (y más...):
// Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
let movies = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
console.log(movies[movies.length - 1]);

//Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. Para esto solicitan que crees una función que reciba po parámetro un array y convierta el contenido de cada elemento a mayúsculas.
let converMayus = (array) => {
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index].toUpperCase();
  }
  return array;
};
console.log(converMayus(movies));

let converMayusMap = (array) => {
  const map1 = array.map((x) => x.toUpperCase());
  return map1;
};
console.log(converMayusMap(movies));

//Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que crear otra estructura similar a la primera, pero con las siguientes películas animadas: "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite" Por lo tanto, te piden crear una función que reciba dos arrays como parámetros, para poder agregar los elementos contenidos en el segundo array dentro del primero, y así retornar un solo array con todas las películas como sus elementos.
let animatedMovies = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

let addArrays = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  return newArr;
};

let allMovies = addArrays(movies, animatedMovies);
console.log(allMovies);

let addArraysConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};
let allMoviesConcat = addArraysConcat(movies, animatedMovies);
console.log(allMoviesConcat);

//Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el contenido al array que contenga todas las películas.
let itemDeleted = animatedMovies.pop();
console.log(itemDeleted, animatedMovies);

//Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios del mundo sobre las películas con el siguiente formato:

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

//Te piden crear una función que compare las calificaciones e indique si son iguales o diferentes. Te confirman que están en el orden adecuado y que solo traenvalores numéricos del 1 al 10.

let ratingCompare = (arr1, arr2) => {
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] != arr2[index]) return "diferentes";
  }
  return "iguales";
};

console.log(ratingCompare(asiaScores, asiaScores));
console.log(ratingCompare(asiaScores, euroScores));

//Extra bonus:
//Array inverso: En este ejercicio deberás crear una función que devuelva un array con sus elementos invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta el orden de sus elementos.
//Creá la función imprimirInverso que tome un array como argumento y que imprima en la consola cada elemento en orden inverso (no tenés que invertir el array).
let imprimirInverso = (arr) => {
  for (let index = 1; index <= arr.length; index++) {
    console.log(arr[arr.length - index]);
  }
};
console.log(movies);
imprimirInverso(movies);

//Creá la función inversor que tome un array como argumento y devuelva uno nuevo invertido.
let inversor = (arr) => {
  let newArr = [];
  for (let index = 1; index <= arr.length; index++) {
    newArr[index - 1] = arr[arr.length - index];
  }
  return newArr;
};

console.log(inversor(movies));

let inversorReverse = (arr) => {
  return arr.reverse();
};

console.log(inversorReverse(movies));

//sumaArray(): En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:

let sumArray = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
};

console.log(sumArray([1, 2, 3])); //6
console.log(sumArray([10, 3, 10])); // 23
console.log(sumArray([-5, 100, 19])); // 114

let sumArrayReduce = (arr) => {
  const sum = arr.reduce((acc, cV) => acc + cV, 0);
  return sum;
};

console.log(sumArrayReduce([1, 2, 3])); //6
console.log(sumArrayReduce([10, 3, 10])); // 23
console.log(sumArrayReduce([-5, 100, 19])); // 114

//Simulación Array.join(): En este ejercicio deberás crear una función llamada join() que reciba un arreglo de strings de 4 elementos y simule el comportamiento del método Array.join().
let join = (arr) => {
  let sum = "";
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
};
console.log(join(["h", "o", "l", "a"])); //debe retornar el string "hola".
console.log(join(["c", "h", "a", "u"])); //debe retornar el string "chau".

// PRE-PARCIAL
// 1) Crear un array llamado misMascotas
let misMascotas = [];

/* 2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces 

    Cuando esté listo, verificar en consola*/
misMascotas.push(
  {
    nombre: "pepe",
    raza: "golden",
    edad: 14,
    sonido: "guau",
    ruido: function () {
      return this.sonido + " " + this.sonido;
    },
  },
  {
    nombre: "garfield",
    raza: "Gato",
    edad: 7,
    sonido: "Miau",
    ruido: function () {
      return this.sonido + " " + this.sonido;
    },
  },
  {
    nombre: "golden",
    raza: "pez",
    edad: 1,
    sonido: "glup",
    ruido: function () {
      return this.sonido + " " + this.sonido;
    },
  }
);

/* 3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1. */
function aumentarEdad(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].edad += 1;
  }
  return array;
}
//console.log(aumentarEdad(misMascotas));

/* 4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad */
function aumentarEdad2(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].edad < 6) array[i].edad += 1;
    if (array[i].edad >= 6 && array[i].edad <= 10) array[i].edad += 2;
    if (array[i].edad > 10) array[i].edad += array[i].edad / 2;
  }
  return array;
}
//console.log(aumentarEdad2(misMascotas));

/* 5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1. */
function generarId(array) {
  for (let i = 1; i <= array.length; i++) {
    array[i - 1].id = i;
  }
  return array;
}
//console.log(generarId(misMascotas));

// EJERCICIOS-CLASE

// Loop de pares
/* Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: "El número X es par". */
const loopDePares = (num) => {
  for (let index = 0; index < 100; index++) {
    (num + index) % 2 == 0
      ? console.log(`El número ${num + index} es par`)
      : console.log(index);
  }
};
// loopDePares(2);

// Loop de impares con palabra
/* Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro. */
const loopDeImpares = (num, word) => {
  for (let index = 0; index < 100; index++) {
    (num + index) % 2 != 0 ? console.log(word) : console.log(index);
  }
};
// loopDeImpares(2, "hola");

// Sumatoria
/* Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:*/
// sumatoria(3) // debe retornar 6 porque hace (1+2+3)
// sumatoria(8) // debe retornar 36
let sumattion = (num) => {
  let sum = 0;
  for (let index = 0; index <= num; index++) {
    sum += index;
  }
  return sum;
};
// console.log(sumattion(8));

// Nuevo arreglo
/* Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo: 
 nuevoArreglo(5) // debe retornar [1,2,3,4,5]
 nuevoArreglo(10) // debe retornar [1,2,3,4,5,6,7,8,9,10] */
let nuevoArreglo = (num) => {
  const arr = [];
  for (let index = 1; index <= num; index++) {
    arr.push(index);
  }
  return arr;
};
// console.log(nuevoArreglo(5));
// console.log(nuevoArreglo(10));

// Similar String.split()
/* Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
split("hola") // debe retornar ["h","o","l","a"]
split("chau") // debe retornar ["c","h","a","u"] */
let split = (input) => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i]);
  }
  return output;
};

// console.log(split("hola como estás?"));

// Manejando dos arreglos
/* Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola "Soy {elemento de array 1} y yo soy {elemento de array 2}". Ejemplo:  arrayHandler([1,2,3,4], ["h","o","l","a"])
debe mostrar: 
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a */
let arrayHandler = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`);
  }
};
//arrayHandler([1, 2, 3, 4], ["h", "o", "l", "a"]);

// Palíndromo
/* Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar "true" en caso de que lo sea, y "false" en caso de que no. Ejemplo: 
palindromo("anilina") // debe retornar true
palindromo("Ana")     // debe retornar true
palindromo("Enrique") // debe retornar false*/
let palindromo = (str) => {
  let strReverse = str.split("").reverse().join("");
  return str === strReverse;
};

console.log(palindromo("ana"));
console.log(palindromo("cama"));

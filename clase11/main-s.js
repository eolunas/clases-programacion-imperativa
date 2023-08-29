/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.
*/
let encontrarMultiplos = (num, limit) => {
  let multiplos = [];
  for (let index = num; index < limit; index++) {
    if (index % num == 0) multiplos.push(index);
  }
  return multiplos;
};
console.log(encontrarMultiplos(5, 50));

/* 
Punto 2: Arreglos y Objetos
 Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).
Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.
*/
// Crear arreglo de objetos estudiantes
let estudiantes = [
  {
    nombre: "Juan",
    notas: [50, 70, 80, 55, 70],
    aprobado: null,
  },
  {
    nombre: "Pedro",
    notas: [80, 40, 80, 60, 70],
    aprobado: null,
  },
  {
    nombre: "Camilo",
    notas: [10, 20, 20, 55, 70],
    aprobado: null,
  },
  {
    nombre: "Karen",
    notas: [20, 75, 30, 55, 70],
    aprobado: null,
  },
];

// Definir la funcion en cada objeto y ejecutarla
let calcularNotas = (array) => {
  for (let index = 0; index < array.length; index++) {
    array[index].calificar = () => {
      let prom = 0;
      for (let y = 0; y < array[index].notas.length; y++) {
        prom += array[index].notas[y];
      }
      prom /= array[index].notas.length - 1;
      array[index].aprobado = prom >= 70 ? true : false;
    };
    array[index].calificar();
  }
};
calcularNotas(estudiantes);
console.log(estudiantes);

/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumPairs = (array) => {
  let sum = 0;
  let index = 0;
  while (index < array.length) {
    if (array[index] % 2 == 0) sum += array[index];
    index++;
  }
  return sum;
};
console.log(sumPairs(numbers));

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.
Respuesta y Explicación:
*/
let multiOdd = (array) => {
  let mul = 1;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 != 0) mul *= array[index];
  }
  return mul;
};
console.log(multiOdd(numbers));

/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.
Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.
*/
let vehiculo = {
  marca: "KIA",
  anio: 2009,
  precio: 3000,
};

vehiculo.calcularImpuesto = () => {
  return vehiculo.anio < 2010 ? vehiculo.precio * 0.1 : vehiculo.precio * 0.05;
};

console.log(vehiculo.calcularImpuesto());
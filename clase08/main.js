// Bucles y repeticiones
// Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
let nextNumbers = (num) => {
  console.log(`Siguientes 10 numeros a partir del ${num}:`);
  let nNums = [];
  for (let index = 1; index <= 10; index++) {
    nNums[index - 1] = num + index;
  }
  console.log(nNums);
};
nextNumbers(10);

// Imprimir los números entre el 5 y el 20, saltando de tres en tres.
//Solucion A:
let jumpNumbersA = () => {
  console.log(`Saltos de numeros (OPCION A):`);
  for (let index = 5; index <= 20; index += 3) {
    console.log(index);
  }
};
jumpNumbersA();
//Solucion B:
let jumpNumbersB = () => {
  console.log(`Saltos de numeros (OPCION B):`);
  let jump = 3;
  for (let index = 5; index <= 20; index++) {
    if (jump == 3) {
      console.log(index);
      jump = 0;
    }
    jump++;
  }
};
jumpNumbersB();

// Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
let sum0To100 = () => {
  console.log(`Sumatoria de 0 a 100:`);
  let sum = 0;
  for (let index = 0; index <= 100; index++) {
    sum += index;
  }
  console.log(sum);
};
sum0To100();

// Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.
let factorial = (num) => {
  console.log(`Factorial de numero ${num}:`);
  if (num < 0) {
    console.log("Numero negativo!!... ingrese un numero mayor que cero.");
  } else {
    let fac = 1;
    for (let index = 1; index <= num; index++) {
      fac *= index;
    }
    console.log(fac);
  }
};
factorial(4);

// Crear una funcion que muestre todos los numeros de la secuencia de fibonacci hasta el valor ingresado por parametro.
let fibonacci = (num) => {
  console.log(`Serie Fibonacci de ${num} iteraciones:`);
  let pivot = [0, 1];
  for (let index = 1; index <= num; index++) {
    pivot = [pivot[1], pivot[0] + pivot[1]];
    console.log(pivot[0]);
  }
};
fibonacci(4);

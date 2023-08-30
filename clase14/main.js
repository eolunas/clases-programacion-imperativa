// Trabajando con Matrices
// Primero vamos a crear una matriz de 2x2 con Js.
let arrayMatriz = [
  ["X0", "X1", "X2"],
  ["Y0", "Y1", "Y2"],
];
console.table(arrayMatriz);
// ¿Cómo accedo al valor almacenado en 1-1?
console.log(arrayMatriz[1][1]);
// ¿Cómo puedo cambiar el valor almacenado en 1-0?
arrayMatriz[1][0] = "YC0";
console.table(arrayMatriz);
// Probemos ahora crear matrices que no sean cuadradas, ¿como lo haríamos?
let arrayMatriz2 = [
    ["X0", "X1", "X2", "X3", "X4"],
    ["Y0", "Y1", "Y2"],
  ];
 console.table(arrayMatriz2);

 //Bucle que recorre el primer array
for(let i=0; i<arrayMatriz.length; i++) {
    //Bucle que recorre el array que está en la posición i
    for(let j=0; j<arrayMatriz[i].length; j++) {
        console.log(arrayMatriz[i][j]);
    }
}

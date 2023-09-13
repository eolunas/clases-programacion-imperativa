/* Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y
obtienen likes, se registra la cantidad de likes obtenidos por cada usuario 
en un array. Ordenar los valores para poder indicar cuál fue la mayor 
cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y 
cuánto el que menos likes obtuvo —suponer que participaron 15 usuarios y 
suponer para cada uno, una cantidad de likes—.*/
const uLikes = [12, 56, 47, 8, 85, 63, 32, 45, 74, 25, 33, 44, 55, 33, 21];
const orderArray = (array) => {
  array.sort((a, b) => b - a);
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = 0; j < array.length - 1; j++) {
  //       if (array[j] < array[j + 1]) {
  //         let pivot = array[j];
  //         array[j] = array[j + 1];
  //         array[j + 1] = pivot;
  //       }
  //     }
  //   }
  return array;
};
const uLOrdered = orderArray(uLikes);
console.log("Primer puesto: " + uLOrdered[0]);
console.log("Segundo puesto: " + uLOrdered[1]);
console.log("Ultimo puesto: " + uLOrdered[uLOrdered.length - 1]);

/* Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura,
utiliza un objeto temperatura donde registra día —valor numérico del 
día—, mes —valor numérico—, temperatura máxima y temperatura mínima, 
correspondiente a dichodía. Las temperaturas —objeto temperatura— están
cargados en un array.*/
const temperatures = [
  {
    day: 1,
    month: 2,
    tempMax: 33,
    tempMin: 25,
  },
  {
    day: 2,
    month: 2,
    tempMax: 29,
    tempMin: 15,
  },
  {
    day: 3,
    month: 2,
    tempMax: 34,
    tempMin: 10,
  },
  {
    day: 4,
    month: 2,
    tempMax: 28,
    tempMin: 18,
  },
  {
    day: 5,
    month: 2,
    tempMax: 35,
    tempMin: 20,
  },
];
const orderArrayProp = (array, prop, order) => {
  if (order == "ASC") array.sort((a, b) => a[prop] - b[prop]);
  if (order == "DESC") array.sort((a, b) => b[prop] - a[prop]);
  return array;
};
/* a) Ordenar por temperatura mínima de menor a mayor.*/
console.log(orderArrayProp(temperatures, "tempMin", "ASC"));
/* b) Ordenar por temperatura máxima de mayor a menor.*/
console.log(orderArrayProp(temperatures, "tempMax", "DESC"));

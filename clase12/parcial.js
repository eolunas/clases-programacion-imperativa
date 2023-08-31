// Ejercicio 1:
// Realizar una función que reciba por parámetro dos valores y verifique qué tipo de dato son:
let checkTypeOf = (dat1, dat2) => {
  let result = undefined;
  let type1 = typeof dat1;
  let type2 = typeof dat2;
  if (type1 == "number" && type2 == "number") result = dat1 * dat2;
  if (type1 == "string" && type2 == "string") result = dat1 + dat2;
  if (type1 == "boolean" && type2 == "boolean") result = false;
  return result;
};

// Si ambos son tipo de dato Number deberá retornar su multiplicación.
console.log(checkTypeOf(10, 10));

// Si ambos son tipo de dato String deberá concatenarlos y retornar el resultado de esa concatenación.
console.log(checkTypeOf("Hola ", "Mundo"));

// Si ambos son tipo de dato Booleano deberán retornar false.
console.log(checkTypeOf(true, false));

// Ejercicio 2:
// Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor:
// nombre
// apellido
// edad
// esArgentino (bool)
let people = [
  {
    nombre: "Juanito",
    apellido: "Perez",
    edad: 28,
    esArgentino: true,
  },
  {
    nombre: "Mariana",
    apellido: "Turbay",
    edad: 28,
    esArgentino: false,
  },
  {
    nombre: "Camilo",
    apellido: "Rodriguez",
    edad: 16,
    esArgentino: true,
  },
  {
    nombre: "Andres",
    apellido: "Calles",
    edad: 15,
    esArgentino: false,
  },
];

// Declarar una función que reciba al objeto por parámetro:
let checkHuman = (human) => {
  result = `${human.nombre} ${human.apellido} `;
  if (human.esArgentino == true) {
    result += "vive en Argentina y ";
  } else {
    result += "NO vive en Argentina y ";
  }
  if (human.edad >= 18) {
    result += "es mayor de edad.";
  } else {
    result += "NO es mayor de edad.";
  }
  return result;
};

// Si la edad es mayor o igual a 18 años y es argentino, retornará una frase que diga: [nombre] [apellido] vive en Argentina y es mayor de edad.
console.log(checkHuman(people[0]));

// Si es mayor de edad pero no es argentino, retornará una frase que diga: [nombre] [apellido] NO vive en Argentina y es mayor de edad.
console.log(checkHuman(people[1]));

// Si NO es mayor de edad pero es argentino, retornará una frase que diga: [nombre] [apellido]  vive en Argentina y NO es mayor de edad.
console.log(checkHuman(people[2]));

// Si no es mayor ni es argentino, retornará una frase que diga: [nombre] [apellido] NO vive en Argentina y NO es mayor de edad.
console.log(checkHuman(people[3]));

// Realizar una función llamada verificacionDeTiposDeDatos que reciba dos valores por parámetro, estos pueden ser String o Booleano. Nuestra función deberá determinar si los valores recibidos son del mismo tipo sin utilizar typeof. Por ejemplo:

// Funcion tipo 1: Usando isNaN()
let verificacionDeTiposDeDatos = (dat1, dat2) => {
  let msg = undefined;
  if (isNaN(dat1 * 0) == isNaN(dat2 * 0)) {
    msg = "Son del mismo tipo";
  } else {
    msg = "No son del mismo tipo";
  }
  return msg;
};
// Funcion tipo 2: Usando comparaciones de tipo y contenido ===
let verificacionDeTiposDeDatos2 = (dat1, dat2) => {
  let msg = undefined;
  if (dat1 === true || dat1 === false) {
    if (dat2 === true || dat2 === false) {
      msg = "Son del mismo tipo";
    } else {
      msg = "No son del mismo tipo";
    }
  } else {
    if (dat2 === true || dat2 === false) {
      msg = "No son del mismo tipo";
    } else {
      msg = "Son del mismo tipo";
    }
  }
  return msg;
};

// Si recibe por parámetro (true, “true”) deberá retornar un mensaje que indique “No son del mismo tipo”
console.log(verificacionDeTiposDeDatos(true, "true"));

// Si recibe por parámetro (false, true) deberá retornar un mensaje que indique “Son del mismo tipo”
console.log(verificacionDeTiposDeDatos(false, true));

// Si recibe por parámetro (“true”,”false”) deberá retornar un mensaje que indique “Son del mismo tipo”
console.log(verificacionDeTiposDeDatos("true", "false"));

// Si recibe por parámetro (“false”, false) deberá retornar un mensaje que indique “No son del mismo tipo”
console.log(verificacionDeTiposDeDatos("false", false));

// Ejercicio 3:
// Crear un array vacío llamado destinos.
let destinos = [];

// Dados estos tres objetos:
let brasil = {
  cantidadDeVisitas: 3,
  clima: "soleado",
  habitantes: "212 millones",
};
let rusia = {
  cantidadDeVisitas: 4,
  clima: "frío",
  habitantes: "144 millones",
};
let estadosUnidos = {
  cantidadDeVisitas: 1,
  clima: "nublado",
  habitantes: "329 millones",
};

// Agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)
destinos.push(brasil, rusia, estadosUnidos);

// Mostrar por consola el array para ver que contenga esos objetos.
console.table(destinos);

// Crea una función que reciba el array destinos como parámetro, e incremente en 1 la cantidad de visitas de cada uno de los destinos, llámala siguienteViaje.
// * Debes utilizar alguna estructura de repetición vista en clase.
let siguienteViaje = (array) => {
  for (let index = 0; index < array.length; index++) {
    array[index].cantidadDeVisitas += 1;
  }
};

//  Mostrar por consola el array de destinos antes y después de la ejecución de la función.
console.table(destinos);
siguienteViaje(destinos);
console.table(destinos);

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];

/* getArrayCondition(array, condition, num)
    array -> Array de numeros.
    condition -> String [ "<", ">", "<=", ">=", "=", "+", "-" "min", "max", "avg" ] 
    num -> numero para la condicion, no se usa para [ "min", "max", "avg" ] 
*/
let getArrayCondition = (array, condition, num = 0) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    switch (condition) {
      case "<":
        if (array[index] < num) result.push(array[index]);
        break;
      case ">":
        if (array[index] > num) result.push(array[index]);
        break;
      case "<=":
        if (array[index] <= num) result.push(array[index]);
        break;
      case ">=":
        if (array[index] >= num) result.push(array[index]);
        break;
      case "=":
        if (array[index] == num) result.push(array[index]);
        break;
      case "+":
        result.push(array[index] + num);
        break;
      case "-":
        result.push(array[index] - num);
        break;
      case "min":
        if (index == 0) result = array[index];
        if (array[index] < result) result = array[index];
        break;
      case "max":
        if (index == 0) result = array[index];
        if (array[index] > result) result = array[index];
        break;
      case "avg":
        if (index == 0) result = 0;
        result += array[index] / array.length;
        break;
      default:
        result = undefined;
        break;
    }
  }
  return result;
};
// Obtener en un nuevo array las edades menores a 18.
console.log(getArrayCondition(edades, "<", 18));
console.log(getArrayCondition(edadesGrupo1, "<", 18));
console.log(getArrayCondition(edadesGrupo2, "<", 18));
// Obtener en un nuevo array las edades mayor o igual a 18.
console.log(getArrayCondition(edades, ">=", 18));
console.log(getArrayCondition(edadesGrupo1, ">=", 18));
console.log(getArrayCondition(edadesGrupo2, ">=", 18));
// Obtener en un nuevo array las edades igual a 18.
console.log(getArrayCondition(edades, "=", 18));
console.log(getArrayCondition(edadesGrupo1, "=", 18));
console.log(getArrayCondition(edadesGrupo2, "=", 18));
// Obtener el menor.
console.log(getArrayCondition(edades, "min"));
console.log(getArrayCondition(edadesGrupo1, "min"));
console.log(getArrayCondition(edadesGrupo2, "min"));
// Obtener el mayor.
console.log(getArrayCondition(edades, "max"));
console.log(getArrayCondition(edadesGrupo1, "max"));
console.log(getArrayCondition(edadesGrupo2, "max"));
// Obtener el promedio de edades.
console.log(getArrayCondition(edades, "avg"));
console.log(getArrayCondition(edadesGrupo1, "avg"));
console.log(getArrayCondition(edadesGrupo2, "avg"));
// Incrementar en 1 todas las edades.
console.log(getArrayCondition(edades, "+", 1));
console.log(getArrayCondition(edadesGrupo1, "+", 1));
console.log(getArrayCondition(edadesGrupo2, "+", 1));

// Segundo ejercicio
const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];
/* getAccount(array, condition, age)
    array -> Array de numeros.
    condition -> String [ "<", ">", "<=", ">=", "min-age", "enable", "disable" "min-saldo", "max-saldo" ] 
    age -> numero para las condiciones de edad 
*/
let getAccount = (array, condition, age) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    switch (condition) {
      case "<":
        if (array[index].edadTitular < age) result.push(array[index]);
        break;
      case ">":
        if (array[index].edadTitular > age) result.push(array[index]);
        break;
      case "<=":
        if (array[index].edadTitular <= age) result.push(array[index]);
        break;
      case "min-age":
        if (index == 0) result = array[index];
        if (array[index].edadTitular < result.edadTitular)
          result = array[index];
        break;
      case "enable":
        if (array[index].estaHabilitada) result.push(array[index]);
        break;
      case "disable":
        if (!array[index].estaHabilitada) result.push(array[index]);
        break;
      case "min-saldo":
        if (index == 0) result = array[index];
        if (array[index].saldo < result.saldo) result = array[index];
        break;
      case "max-saldo":
        if (index == 0) result = array[index];
        if (array[index].saldo > result.saldo) result = array[index];
        break;
      default:
        result = undefined;
        break;
    }
  }
  return result;
};
// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
console.log(getAccount(arrayCuentas, "<", 30));
// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
console.log(getAccount(arrayCuentas, ">=", 30));
// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
console.log(getAccount(arrayCuentas, "<=", 30));
// Obtener la cuenta con el titular de la misma más joven.
console.log(getAccount(arrayCuentas, "min-age"));
// Obtener un array con las cuentas habilitadas.
console.log(getAccount(arrayCuentas, "enable"));
// Obtener un array con las cuentas deshabilitadas.
console.log(getAccount(arrayCuentas, "disable"));
// Obtener la cuenta con el menor saldo.
console.log(getAccount(arrayCuentas, "min-saldo"));
// Obtener la cuenta con el mayor saldo.
console.log(getAccount(arrayCuentas, "max-saldo"));

// EXTRAS
// Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico
let generarID = (array) => {
  for (let index = 0; index < array.length; index++) {
    array[index].id = index + 1;
  }
};
generarID(arrayCuentas);
console.log(arrayCuentas);

// Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null
let buscarPorId = (array, id) => {
  let account = null;
  for (let index = 0; index < array.length; index++) {
    if (array[index].id == id) {
      account = array[index];
      break;
    }
  }
  return account;
};
console.log(buscarPorId(arrayCuentas, 3));
console.log(buscarPorId(arrayCuentas, 0));

// Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro
let filtrarPorSaldos = (array, saldo) => {
  let accounts = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index].saldo < saldo) accounts.push(array[index]);
  }
  return accounts;
};
console.log(filtrarPorSaldos(arrayCuentas, 3000));
// Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined Reutilizando la función  buscarPorId
let incrementarSaldo = (array, id, saldo) => {
  let account = (buscarPorId(array, id).saldo += saldo);
};
console.log(arrayCuentas[1]);
incrementarSaldo(arrayCuentas, 2, 1000);
console.log(arrayCuentas[1]);

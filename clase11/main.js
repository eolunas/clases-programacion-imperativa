//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

// Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una propiedad llamada “clientes” que estará compuesta de la lista de objetos obtenidos en el punto anterior.
let banco = {
  name: "Digital bank",
  clientes: arrayCuentas,
};

// Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado. Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
banco.consultarClienteVanilla = (name) => {
  for (let index = 0; index < banco.clientes.length; index++) {
    let customerName = banco.clientes[index].titularCuenta;
    if (customerName == name) {
      return banco.clientes[index];
    }
  }
  return "Cliente no encontrado!";
};
let clienteEncontradoV = banco.consultarClienteVanilla("Ramon Connell");
console.log(clienteEncontradoV);

banco.consultarCliente = (name) => {
  let customer = banco.clientes.find(
    (cliente) => cliente.titularCuenta === name
  );
  return customer ? customer : "Cliente no encontrado!";
};
let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEncontrado);

// Crear otro método llamado depósito que recibirá dos parámetros: el titular de cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos. Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su nuevo saldo es: XXXX”.
banco.deposito = (name, value) => {
  let customer = banco.consultarClienteVanilla(name);
  if (typeof customer === "object") {
    customer.saldoEnPesos += value;
    return `Depósito realizado, su nuevo saldo es: ${customer.saldoEnPesos}`;
  }
  return customer;
};
console.log(banco.deposito("Ramon Connell", 1000));

// Crear un último método llamado extracción que recibirá también dos parámetros: el titular de cuenta y el monto a extraer. El método debe obtener la cuenta correspondiente y restar el monto al saldo actual. En caso de que el resultado sea menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”. De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo saldo es: XXXX”.
banco.extraccion = (name, value) => {
  let customer = banco.consultarClienteVanilla(name);
  if (typeof customer === "object") {
    if (customer.saldoEnPesos < value) {
      customer = "Fondos insuficientes";
    } else {
      customer.saldoEnPesos -= value;
      customer = `Extracción realizada correctamente, su nuevo saldo es: ${customer.saldoEnPesos}`;
    }
  }
  return customer;
};
console.log(banco.extraccion("Ramon Connell", 1000));
console.log(banco.extraccion("Ramon Connell", 10000));

// Propiedad única
// Crear una función llamada propiedadUnica que reciba un arreglo de objetos como parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. Ejemplo:
const propiedadUnica = (arr, prop) => {
  let newArr = [];
  arr.map((props) => {
    if (props.hasOwnProperty(prop)) {
      let newObj = {};
      newObj[prop] = props[prop];
      newArr.push(newObj);
    }
  });
  return newArr;
};

let array = [
  { nombre: "Lean", edad: 27 },
  { nombre: "Eze", edad: 49 },
];
console.log(propiedadUnica(array, "edad")); // debe retornar [ { edad: 27 }, { edad: 49 } ]
console.log(propiedadUnica(array, "nombre")); // debe retornar [ { nombre: "Lean"}, { nombre: "Eze" } ]

// Calculador de notas
// Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
// Nombre
// Número de legajo
// Lista de notas
const alumno = {
  nombre: "Juanito",
  numeroLegajo: 10,
  notas: [10, 2, 8, 3, 5, 7, 8, 4, 2, 1, 8, 9],
};

// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses todos los métodos y propiedades que puedan hacer falta para que el programa funcione correctamente de la manera solicitada.
alumno.promedio = () => {
  const prom =
    alumno.notas.reduce((acc, cV) => acc + cV, 0) / alumno.notas.length;
  return prom;
};

console.log(alumno.promedio());

alumno.isAprobado = (note) => {
  return alumno.promedio() < note ? "Reprobado" : "Aprobado";
};

console.log(alumno.isAprobado(5));
console.log(alumno.isAprobado(10));

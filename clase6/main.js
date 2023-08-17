//Agrega caminos:
let edad = 21;
if (edad < 0) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else {
  edad % 2 != 0 ? console.log("¿Sabías que tu edad es impar?") : null;
  if (edad < 18) {
    console.log("No puede pasar al bar.");
  } else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  } else {
    console.log("Puede pasar al bar y tomar alcohol.");
    edad == 21 ? console.log("Felicitaciones por tu mayoria de edad") : null;
  }
}

//totalAPagar() :
function totalAPagar(vehiculo, litrosConsumidos) {
  let total = 0;
  switch (vehiculo) {
    case "coche":
      total = 86 * litrosConsumidos;
      break;
    case "moto":
      total = 70 * litrosConsumidos;
      break;
    case "autobús":
      total = 55 * litrosConsumidos;
      break;
    default:
      break;
  }

  if (litrosConsumidos > 0 && litrosConsumidos <= 25) total += 50;
  if (litrosConsumidos > 25) total += 25;
  return total;
}

console.log(totalAPagar("coche", 1));
console.log(totalAPagar("moto", 26));

//Local de sándwiches:
function sanduchePrecio(ing) {
  let price = 0;
  //Calcular base:
  switch (ing[0]) {
    case "pollo":
      price = 150;
      break;
    case "carne":
      price = 200;
      break;
    case "veggie":
      price = 100;
      break;
    default:
      break;
  }
  //Calcular pan:
  switch (ing[1]) {
    case "blanco":
      price += 50;
      break;
    case "negro":
      price += 60;
      break;
    case "s/gluten":
      price += 75;
      break;
    default:
      break;
  }
  //Calcular adicionales:
  ing[2] ? (price += 20) : null;
  ing[3] ? (price += 15) : null;
  ing[4] ? (price += 10) : null;
  ing[5] ? (price += 15) : null;
  ing[6] ? (price += 5) : null;
  ing[7] ? (price += 5) : null;

  return price;
}

let sanducheA = ["pollo", "blanco", true, true, true, true, true, true];
let sanducheB = ["carne", "negro", true, false, true, false, true, false];
console.log(sanduchePrecio(sanducheA));
console.log(sanduchePrecio(sanducheB));

//¿Cual es el número secreto?:
function secretNumber(num) {
  let randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  let result =
    randomNumber == num ? "Felicidades, lo lograste!" : "Sigue intentandolo!";
  return result;
}
console.log(secretNumber(5));

//abrirParacaidas():
function abrirParacaidas(velocidad, altura) {
  let msg = "No abrir paracaidas aun";
  if (velocidad < 1000 && altura >= 2000 && altura < 3000)
    msg = "Abrir paracaidas!!!";
  return msg;
}

console.log(abrirParacaidas(1000, 1000));
console.log(abrirParacaidas(900, 2500));
console.log(abrirParacaidas(900, 3000));

//Traductor condicional:
let stringUno = "perro";
function traducir(palabra) {
  let traduccion = null;
  switch (palabra) {
    case "perro":
      traduccion = "dog";
      break;
    case "pelota":
      traduccion = "ball";
      break;
    case "arbol":
      traduccion = "tree";
      break;
    case "genio":
      traduccion = "genius";
      break;
    default:
      traduccion = "Palabra incorrecta!";
      break;
  }
  return traduccion;
}
console.log(traducir(stringUno));

//Valoración de Películas:
function valoracion(valor) {
  let msg = "No valoraste bien!";
  switch (valor) {
    case "Muy Mala":
      msg = "Calificaste la película como Muy Mala. Lo lamentamos mucho, por favor dinos tu eperiencia.";
      break;
    case "Mala":
      msg = "Calificaste la película como Mala. Lo lamentamos mucho.";
      break;
    case "Mediocre":
      msg = "Calificaste la película como Mediocre. Esperamos nos des comentarios para mejorar.";
      break;
    case "Buena":
      msg = "Calificaste la película como Buena. Seguiremos mejorando.";
      break;
    case "Muy Buena":
      msg = "Calificaste la película como Muy Buena. Nos alegra mucho.";
      break;
    default:
      break;
  }
  return msg;
}

console.log(valoracion("Buena"));

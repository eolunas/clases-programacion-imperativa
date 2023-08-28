let a = 2;
let b = 2;

console.log(a+b);

const prompt = require("prompt-sync")({ sigint: true });
let nombre = prompt('Ingrese el nombre: ');
console.log(`Nombre: ${nombre}`);

function tablaDeMultiplicar(numero) {
	let num = 1;
 	while(num <= 10) {
		 console.log(`${numero} * ${num} = ${numero*num}`);
		 num++;
	 }  
}

tablaDeMultiplicar(5);
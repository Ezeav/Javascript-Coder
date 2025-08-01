let nombrePrompt = prompt("Ingrese su nombre:");
let edadPrompt = prompt("Ingrese su edad:");
let profesion = "Ingeniero";
let Miami = false;

console.log(nombrePrompt);
console.log(edadPrompt);
console.log(profesion);

let x = 10;
let y = 20;
// Operadores aritméticos
console.log(x + y); // Suma
console.log(x - y); // Resta
console.log(x * y); // Multiplicación
console.log(x / y); // División
console.log(x % y); // Módulo (resto de la división)
console.log(x ** y); // Exponenciación (x elevado a la y)

//booleanos
console.log(x == y);
console.log(x != y); // (es diferente o igual a y)

//if(ejecuta el codigo si la condicion es verdadera), else if(agrega mas condiciones para ejecutar el codigo), else (ejecuta
// el codigo si las condiciones anteriores son falsas)
if (edadPrompt >= 18) {
  console.log("Eres mayor de edad");
} else if (edadPrompt < 18) {
  console.log("Sos menor de edad");
}

//AND && si ambas condiciones son verdaderas
//OR || si al menos una condicion es verdadera
//NOT ! invierte el valor de la condicion

//ciclos de repeticion
// i=inicializador, i<5=condicion de parada, i++=forma corta de poner i=i +1 (osea va agregando 1 a i en cada vuelta)
for (let i = 0; i < 5; i++) {
  console.log("Hola Mundo estoy en la vuelta N°" + i);
}

//ciclos condicionales
const color = "Rojo";

let ColorIngresado = prompt("Ingrese un color:");

while (ColorIngresado != color) {
  console.log("El color ingresado no es correcto, intente nuevamente.");
  ColorIngresado = prompt("Ingrese un color:");
}

// validacion de usuarios
//[] el array almacena varios datos en una sola variable
const usuarios = [
  { nombre: "Julieta", edad: 25 },
  { nombre: "Juan", edad: 25 },
  { nombre: "Fran", edad: 25 },
];

//la variable i se aplica al array usuarios y recorre cada uno de sus elementos longitudinalmente (length) como vimos antes 1 por 1
for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].edad >= 18) {
    console.log(`Bienvenido ${usuarios[i].nombre}`);
  } else {
    console.log(`Lo siento ${usuarios[i].nombre}, no puedes ingresar.`);
  }
}

//TERNARIO
let clima = "soleado";
let mensaje =
  clima === "soleado"
    ? console.log(`Hoy hace buen tiempo`)
    : console.log(`Hoy hace mal tiempo`);

//SWITCH caso: calcular los impuestos de cada marca de auto
let marca = prompt("Ingrese la marca de su auto");
let impuesto = 200;

switch (marca) {
  case "Toyota":
    impuesto += 100; // Aumenta el impuesto para Toyota
    break;
  case "Ford":
    impuesto += 150; // Aumenta el impuesto para Ford
    break;
  case "Chevrolet":
    impuesto += 200; // Aumenta el impuesto para Chevrolet
    break;
  default:
    impuesto = "Marca no reconocida, no se aplica impuesto";
}
console.log(`El impuesto para tu auto ${marca} es: ${impuesto}`);

//funciones
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}
saludar(nombrePrompt);

function sumar(a, b) {
  return a + b;
}
let resultado = sumar(4, 6);
console.log("el resultado es: " + resultado);

//funcion flecha
const restar = (a, b) => a - b;
console.log("el resultado de la resta es: " + restar(10, 5));

//funcion factorial: (n) toma el dato de valor que le demos para que se factoree y luego de el resultado
// el resultado es el producto de todos los numeros desde 1 hasta n
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

let res = factorial(5);

console.log(res);

//Arrays
const numeros = [1, 2, 3];
console.log(numeros);
console.log(numeros[0]);

const booleanos = [true, false, true];
console.log(booleanos);

//Matrices
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matriz);
console.log(matriz[2][1]); // Accede al elemento en la fila 3 y valor 8

//push(): Añade un elemento al final del array.

//pop(): Elimina el último elemento del array.

//shift(): Elimina el primer elemento del array.

//unshift(): Añade un elemento al inicio del array.

//sort(): Ordena los elementos del array.

//reverse(): Invierte el orden de los elementos en el array. <--------------->

//metos de modificacion de arrays
let nombres = ["Julieta", "Juan", "Ian"];
nombres.push("Fran"); // Agrega un elemento al final del array
console.log(nombres);

nombres.unshift("Lucas"); // Agrega un elemento al inicio del array
console.log(nombres);

nombres.pop("Fran"); // Elimina el último elemento del array
console.log(nombres);

nombres.shift("Julieta"); // Elimina el primer elemento del array
console.log(nombres);

let indice = nombres.indexOf("Ian"); // Busca el índice de un elemento
console.log(indice); // Imprime el 2

let contiene = nombres.includes("Ian"); // Verifica si un elemento está en el array
console.log(contiene); // Imprime true

//Ordenar arrays
nombres.sort((a, b) => a.localeCompare(b)); // Ordena el array de nombres alfabéticamente
console.log(nombres);

numeros.sort((a, b) => a - b); // Ordena el array de números de menor a mayor
console.log(numeros);

numeros.reverse(); // Invierte el orden del array
console.log(numeros);

//Join (hace una cadena de texto con los elementos del array)
// y los separa por el caracter que le indiquemos
let nombresJoin = nombres.join(", ");
let nombresguion = nombres.join(" - ");
console.log(nombresJoin); // Imprime los nombres separados por comas
console.log(nombresguion); // Imprime los nombres separados por guiones

//ejercicios de chat gpt
//pedir un numero al usuario y mostrar si es par o impar
let numero = prompt("Ingrese un número:");
numero = Number(numero); // Convertir el prompt que salta como texto, a número
if (numero % 3 === 0 && numero % 5 === 0)
  console.log(`el ${numero} es divisible por 3 y por 5`);
else if (numero % 5 === 0) console.log(`el ${numero} es divisible por 5`);
else if (numero % 3 === 0) console.log(`el ${numero} es divisible por 3`);
else console.log(`el ${numero} no es divisible ni por 3 ni por 5`);

// pedir otro numero al usuario y mostrar si es par o impar y si es mayor o menor que 100
let numero2 = prompt("Ingrese otro número:");
numero2 = Number(numero2);
if (numero2 % 2 === 0 && numero2 > 100) {
  console.log(`El número ${numero2} es par y mayor que 100`);
} else if (numero2 % 2 === 0) {
  console.log(`El número ${numero2} es par pero no es mayor que 100`);
} else if (numero2 > 100) {
  console.log(`El número ${numero2} es impar y mayor que 100`);
} else {
  console.log(`El número ${numero2} es impar y no es mayor que 100`);
}

// pedir un tercer numero al usuario y mostrar si es positivo, negativo, cero y si es multiplo de 10
let numero3 = prompt("Ingrese un número:");
numero3 = Number(numero3);
if (numero3 % 10 === 0 && numero3 > 0) {
  console.log(`El número ${numero3} es positivo y múltiplo de 10`);
} else if (numero3 % 10 === 0 && numero3 < 0) {
  console.log(`El número ${numero3} es negativo pero no es múltiplo de 10`);
} else if (numero3 === 0 && numero3 % 10 === 0) {
  console.log(`el ${numero3} es cero y es múltiplo de 10`);
} else if (numero3 % 10 !== 0 && numero3 > 0) {
  console.log(`El número ${numero3} es positivo pero no es múltiplo de 10`);
} else if (numero3 % 10 === 0 && numero3 < 0) {
  console.log(`El número ${numero3} es negativo y es múltiplo de 10`);
}

// NUEVO: MENÚ AGREGADO AL FINAL
let menu = prompt(
  "Elegí una opción:\n1. Verificar edad\n2. Adivinar color\n3. Calcular impuesto de auto\n4. Sumar dos números\n5. Salir"
);

switch (menu) {
  case "1":
    if (edadPrompt >= 18) {
      alert("Sos mayor de edad.");
    } else {
      alert("Sos menor de edad.");
    }
    break;

  case "2":
    const colorCorrecto = "Rojo";
    let colorInput = prompt("Adiviná el color:");
    while (colorInput !== colorCorrecto) {
      alert("Incorrecto, probá de nuevo.");
      colorInput = prompt("Adiviná el color:");
    }
    alert("¡Correcto!");
    break;

  case "3":
    let marcaAuto = prompt("Ingrese la marca de su auto:");
    let impuestoAuto = 200;
    switch (marcaAuto) {
      case "Toyota":
        impuestoAuto += 100;
        break;
      case "Ford":
        impuestoAuto += 150;
        break;
      case "Chevrolet":
        impuestoAuto += 200;
        break;
      default:
        alert("Marca no reconocida.");
        impuestoAuto = 0;
    }
    if (impuestoAuto > 0) {
      alert("El impuesto es: $" + impuestoAuto);
    }
    break;

  case "4":
    if (confirm("¿Querés sumar dos números?")) {
      let num1 = Number(prompt("Ingresá el primer número:"));
      let num2 = Number(prompt("Ingresá el segundo número:"));
      alert("Resultado: " + (num1 + num2));
    }
    break;

  case "5":
    alert("Gracias por usar el simulador.");
    break;

  default:
    alert("Opción inválida.");
    break;
}

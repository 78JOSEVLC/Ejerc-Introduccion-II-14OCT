// Ejercicios  2da parte Introduccion
/**Dadas 2 variables booleanas:
•	booleano1 = true;
•	booleano2 = false;
-----------
•	Crear una variable booleanoAnd cuyo valor sea 
*   la comparación booleana booleano1 AND booleano2.
 */
const booleano1 = true
const booleano2 = false


const booleanoAnd = booleano1 && booleano2; // resultado False

/* Crear variable "booleanoOr" cuyo valor sea 
   la comparación booleana booleano1  OR booleano2.  */

const booleanoOr = booleano1 || booleano2;

/**Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1. */
const booleanoNot = !booleano1

/**Crear variable booleanoMix0 cuyo valor sea la comparación booleana 
   (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2). */
const booleanoMix0 = booleano1 || booleano2 && booleano1 || (!booleano1 && booleano2)

/**Operadores
    Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado.
    Crear variable valorResto cuyo valor sea el resto de 17 entre 7. */
    const valorDivision = 17/3
    console.log(valorDivision);
    console.log('muestra resultado con 2 decimales:  ' + valorDivision.toFixed(2)); // resultado con 2 decimales...
    // otra....
    console.log(valorDivision.toFixed(4)); // resultado con 4 decimales...

/**	Crear variable valorResto cuyo valor sea el resto de 17 entre 7.  */
const valorResto = 17/7
console.log(valorResto);
console.log('muestra valorResto ' + valorResto.toFixed(6));

// Lógica de programación
/*Crea una variable A cuyo valor sea el número 9, 
y después crea una variable B cuyo valor sea un string con el número 9. 
Desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”. 
¿Qué pasa si en vez de tener A == B, comprobamos que A === B? */
const A = 9
let B = '9'
if (A==B ){
    console.log('Son iguales'); 
}
B = 9
if (A === B) {
    console.log('Son de igual valor y tipo'); 
}
/** Crea una variable mochila que sea un ARRAY de elementos. 
    Desarrolla la lógica para que: 
    (a) si mochila tiene más de 10 elementos, 
    muestre por consola el mensaje “No puedo cargar con tantas cosas”; 
    (b) si mochila contiene entre 10 (9) y 2 elementos, 
    se muestre por consola “Qué bien voy con mi mochila”, 
    y, si no,(1)  muestre por consola “Creo q NO NECESITO una mochila”. */
    
let arrayMochila = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(arrayMochila);
console.log(arrayMochila.length); 
/**(a) si mochila tiene más de 10 elementos, */
if (arrayMochila.length >10){
    console.log('NO puedo cargar con tantas cosas');
}
let arrayMochilaParte = arrayMochila.slice(0,9)
console.log(arrayMochilaParte);
console.log(arrayMochilaParte.length);
if (arrayMochilaParte.length<=9 || arrayMochilaParte.length>=2 ) {
    console.log('que BIEN voy con mi Mochila...');
} 
let arrayMochilaMinimo = arrayMochila.slice(0,1)
console.log(arrayMochilaMinimo);
console.log(arrayMochilaMinimo.length);
if (arrayMochilaMinimo.length = 1) {
    console.log('creo que NO NECESITO una Mochila...');
}

/**
    Crear variable contarHasta10 con valor "0" e INCREMENTAR SU VALOR con un bucle
    hasta que se verifique que contarHasta10 === 10.
 */
let contarHasta10 = 0
for (let index = 0; index <= 10; index++) {
    contarHasta10 += 1
    if (contarHasta10 === 10) {
        console.log('se verificado que la variable contarHasta10 es === 10 ' );
    }
}
/**
    Crea una variable diaFestivo que sea de tipo boolean. 
    Crea un ternario en el que si diaFestivo es true devuelva un console.log 
    de ‘Hoy no trabajo’ y, si es false, devuelva ‘Hoy trabajo’.
 
    const age = 17;
    const eresMayorDeEdad = age >= 18  ? "Eres mayor de edad" : "No eres mayor de edad";
    console.log(eresMayorDeEdad)
 */   
    let diaFestivo = true
    let esDiaFestivo = diaFestivo = true ? 'es un dia FESTIVO' : 'NO es un DIA FESTIVO'
    console.log(esDiaFestivo);
    
    diaFestivo = false
    esDiaFestivo = diaFestivo = false ? 'es un dia FESTIVO' : 'NO es un DIA FESTIVO'
    console.log(esDiaFestivo);

/**
    Crea una variable arrayBucle tipo array vacía y rellénala con números 
    del 4 al 18 utilizando un bucle. */    
    const arrayBucle = []
    for (let index = 4; index < 19; index++) {
        console.log(index);        
        arrayBucle.push(index)
    }
    console.log(arrayBucle);

    /**	Recorre la variable creada anteriormente arrayBucle, 
        suma todos sus elementos y guárdalos en una variable de nombre resultado. */
    let arrayResultado = 0
    for (let index = 0; index < arrayBucle.length; index++) {
        console.log(arrayBucle[index])
        // arrayResultado = arrayResultado + arrayBucle[index];
        arrayResultado += arrayBucle[index] 
      }
    console.log(arrayResultado);

// FALTAN 2 EJERCICIOS.....

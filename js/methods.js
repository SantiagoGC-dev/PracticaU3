// Declarar una variable llamada challenge y asignarle un valor inicial
let challenge = '30 Days Of JavaScript';

// Imprimir la cadena en la consola del navegador
console.log(challenge);

// Imprimir la longitud de la cadena
console.log(challenge.length);

// Cambiar todos los caracteres de la cadena a letras mayusculas
console.log(challenge.toUpperCase());

// Cambiar todos los caracteres de la cadena a letras minusculas
console.log(challenge.toLowerCase());

// Cortar (extraer) la primera palabra de la cadena
console.log(challenge.substring(0, 2));

// Extraer la frase "Days Of JavaScript" de "30 Days Of JavaScript"
console.log(challenge.substring(3));

// Verificar si la cadena contiene la palabra "Script"
console.log(challenge.includes('Script'));

// Dividir la cadena en un arreglo
console.log(challenge.split());

// Dividir la cadena en los espacios
console.log(challenge.split(' '));

// Dividir la siguiente cadena en las comas
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

// Cambiar "30 Days Of JavaScript" a "30 Days Of Node"
console.log(challenge.replace('JavaScript', 'Node'));

// Cual es el caracter en el indice 15 en "30 Days Of JavaScript"?
console.log(challenge.charAt(15));

// Cual es el codigo de caracter de 'J' en "30 Days Of JavaScript"?
console.log(challenge.charCodeAt(11));

// Usar indexOf para determinar la posicion de la primera aparicion de 'a'
console.log(challenge.indexOf('a'));

// Usar lastIndexOf para determinar la posicion de la ultima aparicion de 'a'
console.log(challenge.lastIndexOf('a'));

// Usar indexOf para encontrar la posicion de la primera aparicion de la palabra 'because' en la siguiente oracion
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Usar lastIndexOf para encontrar la posicion de la ultima aparicion de la palabra 'because' en la oracion
console.log(sentence.lastIndexOf('because'));

// Usar search para encontrar la posicion de la primera aparicion de la palabra 'because'
console.log(sentence.search('because'));

// Usar trim() para eliminar los espacios en blanco al principio y al final de una cadena
let whitespaceStr = ' 30 Days Of JavaScript ';
console.log(whitespaceStr.trim());

// Usar el metodo startsWith() con la cadena "30 Days Of JavaScript"
console.log(challenge.startsWith('30'));

// Usar el metodo endsWith() con la cadena "30 Days Of JavaScript"
console.log(challenge.endsWith('JavaScript'));

// Usar el metodo match() para encontrar todas las 'a' en "30 Days Of JavaScript"
console.log(challenge.match(/a/g));

// Usar concat() para unir "30 Days Of" y "JavaScript"
let str1 = '30 Days Of';
let str2 = 'JavaScript';
console.log(str1.concat(' ', str2));

// Usar el metodo repeat() para imprimir "30 Days Of JavaScript" 2 veces
console.log(challenge.repeat(2));

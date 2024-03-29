// OPERADORES LÓGICOS

// E    &&
// OU   ||
// NOT  !

// LÓGICA E

// E-MAIL       SENHA       ENTRAR NO SISTEMA
// TRUE         TRUE        TRUE
// TRUE         FALSE       FALSE
// FALSE        TRUE        FALSE
// FALSE        FALSE       FALSE

let email = "a@b.com";
let senha = "123";

// OPERAÇÃO RELACIONAL ABAIXO

// console.log(email == "a@b.com");
// console.log(senha == "1234");

let verificaEmail = email == "a@b.com";
let verificaSenha = senha == "123";

console.log(verificaEmail);
console.log(verificaSenha);

// OPERAÇÃO LÓGICA && ABAIXO!

console.log(verificaEmail && verificaSenha);





// LÓGICA OU

// SOLZAO       JOGO BR     CHURRAS NO DOM.
// TRUE         TRUE        TRUE
// TRUE         FALSE       TRUE
// FALSE        TRUE        TRUE
// FALSE        FALSE       FALSE

let sol = false;
let jogo = false;
let feriadoSeg = true;

console.log(sol || jogo || feriadoSeg);

let verifica = true;
console.log(!verifica);


console.log(" ");
console.log(" ");


// VERIFICAÇÃO DA IDADE DO VOTO OPCIONAL
let idade = 70;

let verificaMenorIdade = idade >= 16 && idade < 18;
console.log("Voto opc. para menor de idade: " + verificaMenorIdade);

let verificaMaiorIdade = idade > 70;
console.log("Voto opc. para maior de idade: " + verificaMaiorIdade);

// APLICANDO O OU

let votoOpcional = verificaMenorIdade || verificaMaiorIdade;
console.log(votoOpcional);

// if ((idade >= 16 && idade < 18) || (idade > 70)) {

// }


// OPERADORES DE INCREMENTO OU DECREMENTO

let num = 5;

num = num + 1; // num = 6
num++; // num = 7
console.log(num);

console.log(num++); // POS-FIXADO

console.log(num); // num = 8

console.log(++num); // PRE-FIXADO

num--; // num = 8
console.log(num);

// OPERADOR DE ATRIBUIÇÃO
num = num + 2; // num = 10
console.log(num);

num += 2;
console.log(num); // num = 12

num /= 2; // num = 6
console.log(num);

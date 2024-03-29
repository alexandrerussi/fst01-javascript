let nome = "Pedro";
console.log(nome);

const PI = 3.1415;

let valorLogico = 0;
console.log(valorLogico, typeof(valorLogico));

// COERÇÃO EXPLICITA
valorLogico = Boolean(valorLogico);
console.log(valorLogico, typeof(valorLogico));

// COERÇÃO IMPLICITA
let soma = "1" + 2;
console.log(soma, typeof(soma));


let ligado = false; // BOOLEANO
console.log(ligado, typeof(ligado));

ligado = String(ligado); // STRING - TEXTO
console.log(ligado, typeof(ligado));

let valorProduto = "10.99999995"; // string
console.log(valorProduto, typeof(valorProduto));

valorProduto = parseInt(valorProduto);
// valorProduto = +valorProduto;
console.log(valorProduto, typeof(valorProduto));


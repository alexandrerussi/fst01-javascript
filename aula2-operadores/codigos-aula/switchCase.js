// SWITCH/CASE É UMA OUTRA ESTRUTURA CONDICIONAL

let tipoUsuario = 1; // USUARIO COMUM = 1   | USUARIO ADMIN = 2

switch (tipoUsuario) {
    case 1:
        // alert("Usuário comum");
        console.log("Usuário comum");
        break;
    case 2:
        // alert("Usuário admin");
        console.log("Usuário admin");
        break;
    default:
        // alert("Usuário inválido");
        console.log("Usuário inválido");
}

console.log("fim");
// alert("fim");
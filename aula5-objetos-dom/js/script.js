// SELECIONANDO A TAG HTML INPUT
let nome = document.getElementById("nome-input");
let preco = document.getElementById("preco-input");
let divCardProdutos = document.querySelector(".produtos-cards");

// ESCUTANDO EVENTO DE CLICK NO BOTÃO
document.getElementById("btn-add-produto").addEventListener("click", function () {
    // EXIBINDO VALORES DAS TAGS NO CONSOLE PARA VERIFICAR
    console.log(nome.value);
    console.log(preco.value);

    // EXIBINDO TAG HTML DA CLASSE .produtos-cards PARA VERIFICAR
    console.log(divCardProdutos);

    // CONCATENANDO CÓDIGO HTML COM VARIÁVEL NA div.produtos-cards
    // NOTE A IMPORTÂNCIA DA TEMPLATE STRING
    divCardProdutos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${nome.value}</h5>
                <p class="card-text">R$ ${preco.value}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    `;
});
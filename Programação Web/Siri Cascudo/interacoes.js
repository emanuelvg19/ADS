// 1. Seleciona TODOS os botões da tela
const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
const contadorHtml = document.getElementById('contador-itens');

// Variável para armazenar o estado atual
let totalNoCarrinho = 0;

// 2. Cria um loop (forEach) para ouvir o clique em cada botão individualmente
botoesAdicionar.forEach( (botao) => {
    
    botao.addEventListener('click', () => {
        totalNoCarrinho++; // Incrementa a variável
        contadorHtml.innerText = totalNoCarrinho; // Atualiza a tela
    });

});
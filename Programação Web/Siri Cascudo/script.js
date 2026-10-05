const form = document.getElementById('form-cadastro');

form.addEventListener('submit', function(event) {
    // A regra de ouro: impede o recarregamento da página
    event.preventDefault();

    // Capturando um dado para teste
    const nomeDigitado = document.getElementById('nome').value;
    
    console.log("Ação interceptada com sucesso!");
    console.log("Cliente:", nomeDigitado);
});
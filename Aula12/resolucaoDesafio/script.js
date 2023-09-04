let produtos = [];


// Loop principal do programa
let opcao;


while (opcao !== "4") {
    opcao = prompt("Selecione uma opção:\n1 - Cadastrar produto\n2 - Listar produtos cadastrados\n3 - Finalizar compra\n4 - Encerrar programa\n5 - remover item");


    if (opcao === "1") {
        let nome = prompt("Digite o nome do produto:");
        let preco = parseFloat(prompt("Digite o preço do produto:"));


        let produto = { nome, preco };
        produtos.push(produto);


        alert("Produto cadastrado com sucesso!");
    } else if (opcao === "2") {
        let lista = "Lista de Produtos:\n";


        for (let i = 0; i < produtos.length; i++) {
            lista += `Produto ${i + 1}: ${produtos[i].nome} - Preço: R$ ${produtos[i].preco.toFixed(2)}\n`;
        }


        alert(lista);
    } else if (opcao === "3") {
        let total = 0;


        for (let i = 0; i < produtos.length; i++) {
            total += produtos[i].preco;
        }


        let formaPagamento = prompt("Escolha a forma de pagamento (débito, crédito, PIX ou dinheiro):");


        alert(`O total da compra é R$ ${total.toFixed(2)}.\nForma de pagamento: ${formaPagamento}\nCompra finalizada!`);
    } else if (opcao === "4") {
        alert("Programa encerrado.");
    } else if (opcao === "5") {
        let lista = "Lista de Produtos:\n";


        for (let i = 0; i < produtos.length; i++) {
            lista += `Produto ${i}: ${produtos[i].nome} - Preço: R$ ${produtos[i].preco.toFixed(2)}\n`;
        }

        let indice = parseInt(prompt("Digite o item a ser removido")) 

        produtos.splice(indice, 1)
    } else {
        alert("Opção inválida. Por favor, tente novamente.");
    }
}

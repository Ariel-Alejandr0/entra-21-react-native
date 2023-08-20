let valorProduto       = parseFloat(prompt("Digite o valor do produto"))
let percentualDesconto = parseFloat(prompt("Digite o valor do desconto em %"))
let valorDesconto      = valorProduto * (percentualDesconto /100)
let valorFinal         = valorProduto - valorDesconto

valorDesconto = valorDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
valorFinal = valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


document.write(`O valor do desconto será ${valorDesconto} <br>`)
document.write(`O valor final do produto será ${valorFinal} <br>`)
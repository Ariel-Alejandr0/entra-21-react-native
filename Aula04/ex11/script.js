let cotacaoDolar = 4.97
let valorDolar = parseFloat(prompt("Digite o seu valor em Dolar"))

let converte = (valorDolar * cotacaoDolar).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
valorDolar = valorDolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

document.write(`O valor ${valorDolar} em real fica: ${converte}`)
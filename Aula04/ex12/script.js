let peca = prompt("Informe a peça para saber o estoque")
let estoqueMinimo = parseInt(prompt(`Informe o estoque mínimo de ${peca}`))
let estoqueMaximo = parseInt(prompt(`Informe o estoque máximo de ${peca}`))
let estoqueMedio = (estoqueMinimo + estoqueMaximo) / 2

document.write(`O estoque médio de ${peca} é ${estoqueMedio}`)
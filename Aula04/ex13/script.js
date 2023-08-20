let vendedor = prompt("Digite o nome do vendedor")
let codPeca = prompt("Digite o código da peça")
let precoPeca = parseFloat(prompt("Digite o valor da peça"))
let qtdPeca = parseInt(prompt("Digite a quantidade de peça vendida"))
let comicao = (precoPeca * qtdPeca) * 5 / 100


document.write(`vendedor: ${vendedor} <br>`)
document.write(`peça vendida: ${codPeca} <br>`)
document.write(`preço da peça: ${precoPeca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>`)
document.write(`quantidade vendida: ${qtdPeca} <br>`)
document.write(`comição recebida: ${comicao}`)

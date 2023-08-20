let idadeAnos = parseInt(prompt("Qual a sua idade?"))
let idadeMeses = parseInt(prompt("Qual o restante da sua idade em meses?"))
let idadeDias = parseInt(prompt("Qual o restante da sua idade em dias?"))

qtdDias = (idadeAnos * 365) + (idadeMeses * 30) + (idadeDias)

document.write(`A sua idade total em dias é ${qtdDias}`)
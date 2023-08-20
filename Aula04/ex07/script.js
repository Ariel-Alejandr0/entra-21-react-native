let saldo = parseFloat(prompt("Digite o seu saldo"))
let reajuste = 18
valorReajuste = (saldo * reajuste) / 100
valorFinal = saldo + valorReajuste 

valorReajuste = valorReajuste.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
valorFinal = valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


document.write(`O valor do saldo com um reajuste de ${valorReajuste} é de ${valorFinal}`)
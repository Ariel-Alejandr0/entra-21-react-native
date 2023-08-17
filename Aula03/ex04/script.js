let saldo = 0.0
window.alert(`O valor atual do saldo é R$${saldo}`);

let deposito = parseFloat(window.prompt(`Digite o valor atual do deposito: `))

saldo += deposito

window.alert(`O valor atual do saldo é R$${saldo}`);

let saque = parseFloat(window.prompt(`Digite o valor atual do saque (disponível ${saldo}): `))

saldo -= saque

window.document.write(`O valor atual do saldo é R$${saldo}`);

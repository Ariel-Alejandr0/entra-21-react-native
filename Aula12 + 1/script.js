let gado = [];
let ovelha = [];
let tipoGado = ["branco", "malhado", "marrom"];
let tipoOvelha = ["brancas", "marrom", "preta"];
let valorGado = 5000, valorOvelha = 3000;
let valorTotal = 0;

// entrada de dados
for (let i = 0; i < 3 ; i++) {
    gado[i] = parseInt(prompt("Quantos gados do tipo " + tipoGado[i]));
    valorTotal += gado[i] * valorGado;
}
for (let i = 0; i < 3 ; i++) {
    ovelha[i] = parseInt(prompt("Quantas ovelhas do tipo " + tipoOvelha[i]));
    valorTotal += ovelha[i] * valorOvelha;
}

document.write("GADO    |QTDE| VLR. UNITÁRIO| VLR. TOTAL <br>")

for (let i = 0; i < 3; i++) {
    document.write(tipoGado[i] + "| " + gado[i] + "| " + valorGado + "| " + (gado[i] * valorGado) + "<br>");
}

document.write("GADO    |QTDE| VLR. UNITÁRIO| VLR. TOTAL <br>")

for (let i = 0; i < 3; i++) {
    document.write(tipoOvelha[i] + "| " + ovelha[i] + "| " + valorOvelha + "| " + (ovelha[i] * valorOvelha) + "<br>");
}

document.write("Valor Toatal do Rebanho: " + valorTotal.toLocaleString({style: "currency", currency: 'BRL'}));


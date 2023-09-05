// Define o número de gado e ovelhas por cor
const coresGado = ['branco', 'malhado', 'marrom']; // Defina as cores do gado
const quantidadeGado = [];
const coresOvelha = ['brancas', 'marrom', 'pretas']; // Defina as cores das ovelhas
const quantidadeOvelha = [];

// Solicitar as quantidades de gado ao usuário
for (let i = 0; i < coresGado.length; i++) {
  const cor = coresGado[i];
  const quantidade = parseInt(prompt(`Informe a quantidade de gado ${cor}:`)) || 0;
  quantidadeGado.push(quantidade);
}

// Solicitar as quantidades de ovelha ao usuário
for (let i = 0; i < coresOvelha.length; i++) {
  const cor = coresOvelha[i];
  const quantidade = parseInt(prompt(`Informe a quantidade de ovelha ${cor}:`)) || 0;
  quantidadeOvelha.push(quantidade);
}

// Define o custo por cabeça
const custoPorCabecaGado = 5000; // BRL
const custoPorCabecaOvelha = 3000; // BRL

// Inicializa as variáveis de custo total
let custoTotalGado = 0;
let custoTotalOvelha = 0;

// Gere o resumo para o gado
document.write('Gado         Qtde         Vlr.Unitário           Vlr.Total<br>');
for (let i = 0; i < coresGado.length; i++) {
  const cor = coresGado[i];
  const quantidade = quantidadeGado[i];
  const custo = quantidade * custoPorCabecaGado;
  custoTotalGado += custo;

  document.write(`${cor.padEnd(10)} ${quantidade.toString().padStart(7)} ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(custoPorCabecaGado).padStart(16)} ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(custo).padStart(16)}<br>`);
}

// Gere o resumo para as ovelhas
document.write('<br>Ovelha   Qtde          Vlr.Unitário           Vlr.Total<br>');
for (let i = 0; i < coresOvelha.length; i++) {
  const cor = coresOvelha[i];
  const quantidade = quantidadeOvelha[i];
  const custo = quantidade * custoPorCabecaOvelha;
  custoTotalOvelha += custo;

  document.write(`${cor.padEnd(10)} ${quantidade.toString().padStart(7)} ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(custoPorCabecaOvelha).padStart(16)} ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(custo).padStart(16)}<br>`);
}

// Calcule o valor total do rebanho
const valorTotal = custoTotalGado + custoTotalOvelha;
document.write(`<br>Valor Total do Rebanho: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal)}`);

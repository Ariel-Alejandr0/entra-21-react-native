let pntTimeLider = parseInt(prompt("Digite a quantidade de pontos do time líder"))
let pntTimeLanterna = parseInt(prompt("Digite a quantidade de pontos do time lanterna"))

let diferenca = Math.ceil((pntTimeLider - pntTimeLanterna) / 3)

document.write(`O time lanterna precisa de ${diferenca} vitorias para alcançar o time líder!`)
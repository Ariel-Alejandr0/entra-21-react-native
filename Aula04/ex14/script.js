let velocidadeMedia  = parseFloat(prompt("Digite a velocidade média da viagem (Km/h)"))
let tempoGasto = parseInt(prompt("Digite a tempo que demorou a viagem (em horas)"))
let distancia = (velocidadeMedia * tempoGasto)
let litros_usados = (distancia / 12).toFixed(2)

document.write(`Esta vaigem demorou ${tempoGasto}h a uma velocidade média de ${velocidadeMedia}Km/h 
                , a distancia percorrida é de ${distancia}Km, o combustivel gasto foi ${litros_usados}L`,)
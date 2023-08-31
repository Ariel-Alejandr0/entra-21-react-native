let vetor = [Array.from({length : 10})]
let continua = true

for(let i = 0; i < 10; i++){
    vetor[i] = prompt(`Digite o ${i}º elemento`)
}

while(continua){
    let elemento = prompt("Digite o elemento desejado (-1 para o programa)")
    let indice = vetor.indexOf(elemento)
    if(indice != -1){
        alert(`O elemento ${elemento} está localizado no índice ${indice}`)
    }else{
        alert("Elemento não encontrado")
    }

    if(+elemento < 0){
        continua = false
    }
}
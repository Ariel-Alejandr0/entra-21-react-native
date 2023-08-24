let perguntas = ["Telefonou para a vítima?", "Esteve no local do crime?", "Mora perto da vítima?", "Devia para a vítima?", "Já trabalhou com a vítima?"]
let contagem = 0


for(i = 0; i < 5; i++){
    let fazPergunta = prompt(perguntas[i] + "[s/n]").toLowerCase()
    
    if (fazPergunta == 's'){
        contagem++
    }
}

if(contagem === 2){
    document.write("Suspeito")
} else if (contagem === 3 || contagem === 4){
    document.write("Cumplice")
} else if (contagem === 5){
    document.write("Assassino")
} else{
    document.write("Inocente")
}
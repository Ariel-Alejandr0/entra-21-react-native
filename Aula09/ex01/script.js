let contagem = 0
let soma = 0

//prender o usurio ente 1 e 10

do{

    var num = parseInt(prompt("Digite um numero entre 1 e 10"))

}while(num < 0 && num > 10)

while(contagem < 20){

    if(num % 2 != 0){
        contagem++
        soma += num * num
        document.write(`contagem: ${contagem} | Numero: ${num} | Soma: ${soma}<br>`)
    }
    num++
}

let numeros = []
let continua = false

do{
    let num = parseInt(prompt("Digite um número inteiro")) 
    
    numeros.push(num)
    numeros.sort()

    alert(`Maior número: ${numeros[numeros.length - 1]}`)
    alert(`Menor número: ${numeros[0]}`)

    let continuar = prompt('Quereis continuar [s/n]?').toLowerCase()

    if(continuar == 's'){
        continua = true
    }else{
        continua = false
    }
}while(continua == true)

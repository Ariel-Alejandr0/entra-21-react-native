let num = prompt("digite o numero da tabuada: ")
let limite = prompt("digite o limite da tabuada: ")

for(i = 1; i <= limite; i++){
    document.write(`${num} x ${i} = ${i * num} <br>`)
}
let ano = parseInt(prompt("Digite um ano"))

if(ano % 4 === 0 && ano % 100 != 0){
    document.write("Ano bissexto")
}else{
    document.write("Ano não bissexto")
}

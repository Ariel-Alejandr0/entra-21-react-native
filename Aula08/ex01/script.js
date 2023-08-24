let op = 0

do{
    
    var sexo = prompt("Informe o teu o sexo M ou F ou I (indefinido)")
    var idade = parseInt(prompt("Infrome a sua idade"))
    if (idade >= 18){
        if(sexo == 'F' || sexo == 'f'){
            alert("Sexo Feminino e maior de idade")
            op = 1
            } else if(sexo == "M" || sexo == "m"){
                alert("Sexo Macho e maior de idade")
                op = 1
                } else if(sexo == "I" || sexo == "i"){
                    alert("Sexo Indefinido e maior de idade")
                    op = 1
                    } else {
                        alert("Tente novamente! Informe uma das oções anteriores")
                        }
    } else{
        if(sexo == 'F' || sexo == 'f'){
            alert("Sexo Feminino e menor de idade")
            op = 1
            } else if(sexo == "M" || sexo == "m"){
                alert("Sexo Macho e menor de idade")
                op = 1
                } else if(sexo == "I" || sexo == "i"){
                    alert("Sexo Indefinido e menor de idade")
                    op = 1
                    } else {
                        alert("Tente novamente! Informe uma das oções anteriores")
                        }
    }
    

}while(op === 0)
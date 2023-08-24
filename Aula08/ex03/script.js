
let continua = true

do{

    let turno = prompt('Digite o seu turno:\n M - matutino\n V - vespertino\n N - noturno')

    if(turno == 'm' || turno == 'M'){
        document.write("Bom dia!")
        continua = false
        } else if(turno == 'v' || turno == 'V'){
            document.write("Boa Tarde!")
            continua = false
            } else if (turno == 'n' || turno == 'N'){
                document.write("Boa Noite")
                continua = false
                } else{
                    alert("Digite uma opção válida!");
                    }
}while(continua === true)



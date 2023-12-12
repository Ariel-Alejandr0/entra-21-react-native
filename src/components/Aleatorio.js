import React from "react";
import { Alert, Text } from "react-native";
import estilo from "./estilo";

function Aleatorio({min, max}) {
    let numAleatorio = Math.floor(Math.random() * (max - min)) + min;
    return(
        <Text style={estilo.txtGrande}>
            O número gerado entre {min} e {max} foi {numAleatorio}
        </Text>
    )
}
export {Aleatorio}

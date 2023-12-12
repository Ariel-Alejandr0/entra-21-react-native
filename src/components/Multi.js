import React from "react";
import {Text} from "react-native";
import Estilo from "./estilo";


export default function comp() {
    return <Text style={Estilo.txtGrande}>Comp #Oficial</Text>
}

function Comp1() {
    return <Text style={Estilo.txtGrande}>Comp #01</Text>
}


function Comp2() {
    return <Text style={Estilo.txtGrande}>Comp #02</Text>
}

export {Comp1, Comp2}
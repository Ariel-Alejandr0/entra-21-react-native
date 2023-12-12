import React from "react";
import {Text} from 'react-native';
import Estilo from "./estilo";

export default () => {
    console.warn("Habsirvers!")
    
    return (
        <Text style={Estilo.txtGrande}>Componente importado</Text>
    )
}
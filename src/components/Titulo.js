import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo";


export default props => (
    <React.Fragment key="1">
        <Text style={estilo.txtGrande}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>   
)

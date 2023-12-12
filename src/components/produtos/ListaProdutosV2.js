import React from 'react'
import { FlatList, Text } from 'react-native'
import estilo from '../estilo'
import produtos from './Produtos'

export default props => {
    
    const produtoRender = ({ item : p }) => {
        return (
            <Text style={{color: 'black'}}>
                {p.id}| {p.nome} - R${p.preco}
            </Text>
        
        )
    }

    return(
        <>
            <Text style={estilo.txtGrande}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
            
    )
}
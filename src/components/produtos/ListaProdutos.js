import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Produtos from './Produtos'



export default props => {
    
    function obterLista (){
        return Produtos.map(p => {
            return (<Text style={{color: 'black'}} key={p.id}>
                        {p.id}| {p.nome} R${p.preco}
                    </Text>)
        })
    }
    
    return(
        <>
            <Text style={estilo.txtGrande}>
                Lista de Produtos
            </Text>
            {obterLista()}
        </>
    )
}
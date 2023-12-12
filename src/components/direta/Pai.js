import React from 'react'
import { Text } from 'react-native'
//import estilo from './estilo'
import Filho from './Filho';


export default props => {
    let x = 12 + 1
    let y = 100
    
    return(
        <>
            <Filho a={x} b={y} />
            <Filho a={x + 7} b={y - 8} />
        </>
    )
}
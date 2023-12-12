import React from 'react'
import Membro from './Membro'
import { Text } from 'react-native'

export default props => {
    return(
        <>
            <Text style={{color: '#000'}}>Membros da família</Text>
            {props.children}
        </>
    )
}
import React, {useState} from 'react'
import { Text, TextInput, View } from 'react-native'
import estilo from './estilo'
import { createTestScheduler } from 'jest'

export default props => {
    
    const [nome, setNome] = useState('Teste')
    
    return(
        <View style={{backgroundColor: 'black'}}>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Digite seu Nome"
                value={null}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}
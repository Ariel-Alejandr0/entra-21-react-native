import React from "react";
import { SafeAreaView, StyleSheet} from "react-native";
// import Primeiro from './components/Primeiro';
// import ComPadrao, {Comp1, Comp2} from './components/Multi';
//import MinMax from './components/MinMax';
// import {Aleatorio} from './components/Aleatorio';
// import Titulo from './components/Titulo';
//import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import ParImpar from './components/ParImpar';
// import Familia from './components/relacao/Familia';
// import Membro from "./components/relacao/Membro";
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
import DigiteSeuNome from './components/DigiteSeuNome';


export default () => (
    <SafeAreaView style={style.App}>
        {/*<ComPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro/>     
        <MinMax min={4} max={8}/>
        <MinMax min={6} max={20}/>*/}
        {/* <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/> */}
        {/* <Titulo principal="cadastro Produto" secundario="Tela de cadastro"/> */}
        {/* <Botao/> */}
        {/* <Contador inicial={10} passo={15}/>
        <Contador/> */}
        {/* <Pai/> */}
        {/* <Pai/>         */}
        {/* <ContadorV2/> */}
        {/* <ParImpar num={3}/> */}
        {/* <Familia>
            <Membro nome="Ruth" sobrenome="Silva"/>
            <Membro nome="Luis" sobrenome="Silva"/>
        </Familia>

        <Familia>
            <Membro nome="Kleber" sobrenome="Marcellino"/>
            <Membro nome="Douglas" sobrenome="Marcellino"/>
        </Familia> */}
        {/* <UsuarioLogado usuario={ {nome: "Ariel", email: "ariel@uol.com"} }/> */}
        {/* <ListaProdutos/> */}
        {/* <ListaProdutosV2/> */}
        <DigiteSeuNome/>
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {  
        backgroundColor: '#fff',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20 
    }
})
 
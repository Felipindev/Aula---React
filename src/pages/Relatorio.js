import React from 'react'
import { View, Text, Button } from 'react-native'

// recebemos como props o navigation para navegar entre as telas
const Relatorio = ({navigation}) => {
    return(
        <View style={{flex:1, backgroundColor:'#9e3828', alignItems:'center', justifyContent:'center'}}>    
            <Text style={{fontSize: 30}}>Tela de Relatorio</Text>
            {/* nos botoes, no onPress, dizemos para qual tela queremos ir */}
            <Button title='ir para cadastro' onPress={() => navigation.navigate('Cadastro')}/>
            <Button title='Ir para a tela de grafico' onPress={() => navigation.navigate('Grafico')}/>
            <Button title='Voltar' onPress={() => navigation.goBack()}/>
        </View>
    )
}
export default Relatorio
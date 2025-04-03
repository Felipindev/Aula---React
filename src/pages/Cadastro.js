import React from 'react'
import { View, Text, Button } from 'react-native'

// recebemos como props o navigation para navegar entre as telas
const Cadastro = ({navigation}) => {
    return(
        <View style={{flex:1, backgroundColor:'#8c9e28', alignItems:'center', justifyContent:'center'}}>    
            <Text style={{fontSize: 30}}>Tela de cadastro</Text>
            {/* nos botoes, no onPress, dizemos para qual tela queremos ir */}
            <Button title='Ir para a tela de relatorio' onPress={() => navigation.navigate('relatorio')}/>
            <Button title='Ir para a tela de grafico' onPress={() => navigation.navigate('grafico')}/>
            <Button title='Voltar' onPress={() => navigation.goBack()}/>
        </View>
    )
}
export default Cadastro
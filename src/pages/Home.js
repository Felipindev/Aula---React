import React from 'react'
import { View, Text, Button } from 'react-native'

// recebemos como props o navigation para navegar entre as telas
const Home = ({navigation}) => {
    return(
        <View style={{flex:1, backgroundColor:'#28849e', alignItems:'center', justifyContent:'center'}}>    
            <Text style={{fontSize: 30}}>Tela principal</Text>
            {/* nos botoes, no onPress, dizemos para qual tela queremos ir */}
            <Button title='Ir para a tela de cadastro' onPress={() => navigation.navigate('Cadastro')}/>
            <Button title='Ir para a tela de relatorio' onPress={() => navigation.navigate('Relatorio')}/>
            <Button title='Ir para a tela de grafico' onPress={() => navigation.navigate('Grafico')}/>
        </View>
    )
}
export default Home
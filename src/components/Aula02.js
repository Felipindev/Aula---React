import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView } from "react-native"
import React, {useState} from 'react'
import { LinearGradient } from "expo-linear-gradient"
import Hr from "./Hr"
import Style from "./Estilos"
import Aula02_Flexbox from "./Aula02_Flexbox"

const Aula02 = () => {
    const [nome, setNome] = useState('')


    return(
        <ScrollView>
        <View style={Style.container}>
            <Hr/>
            <Text style={Style.texto}>Aula 02 | Componentes Básicos</Text>
            <Text style={Style.textin}>Conhecendo os principais componentes do React Native</Text>
            {/* usado para inserir qualquer imagem local */}
            <Image source={require('../assets/logo.png')} style={{width: 50, height: 50}}/>

            {/* usado para inserir uma imagem da internet */}
            <Image source={{uri:'https://picsum.photos/200/300'}} style={{width: 300, height: 200, borderRadius: 15}}/>

            {/* input para receber dados do usuario */}
            <TextInput placeholder="Digite seu nome" style={Style.input} onChangeText={setNome}/>
            <Text>Seu nome é: {nome}</Text>

            {/* botao padrao do react native */}
            <Button title="Clique ae" onPress={() => alert('Anteonti fes fri, ontonti fes friiii')}/>

            {/* botao customizado */}
            <TouchableOpacity style={Style.button} onPress={() => alert('tanto fri mas tanto fri que eu nao consigo dormir')}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Botao 2</Text>
            </TouchableOpacity>

            {/* estilização inline */}
            <Text style={{color: "blue", fontSize: 20}}>Texto azul</Text>
            <Text style={{color: "red", fontSize: 20}}>Texto vermelho</Text>

            {/* estilização com o StyleSheet */}
            <Text style={Style.texto}>Texto estilizado com o StyleSheet</Text>

            {/* view estilizada com um gradiente */}
            <View>
                <LinearGradient colors={['#000', '#fff']} style={{height: 200, width: 200, borderRadius: 10}}></LinearGradient>
            </View>

            <Aula02_Flexbox/>
        </View>
        </ScrollView>
    )
}

export default Aula02
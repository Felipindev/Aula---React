import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'


// recebemos como props o navigation para navegar entre as telas
const Home = ({navigation}) => {
    return(
        <View style={styles.container}>    
            <Text style={styles.title}>Tela principal</Text>
            <Text style={styles.subtitle}>Bem vindo ao curso de React Native</Text>
            <Text style={styles.subtitle}>Navegação entre telas:</Text>
            {/* nos botoes, no onPress, dizemos para qual tela queremos ir */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.buttonText}>Ir para a tela de cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Relatorio')}>
                <Text style={styles.buttonText}>Ir para a tela de relatorio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Grafico')}>
                <Text style={styles.buttonText}>Ir para a tela de grafico</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 30,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: 200,
        color: '#fff',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Home
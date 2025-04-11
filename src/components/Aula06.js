import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Aula06 = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Aula 06 | Estilos de navegação Drawer e Icons</Text>
            <Text style={styles.title2}>Aprendendo a programar na navegação estilo Drawer e aprendendo icones no app</Text>
        </View>
    )
} 
export default Aula06;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    },
    title2:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    }
})

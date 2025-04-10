import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Aula05 = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Aula 05 | Estilos de navegação</Text>
            <Text style={styles.title2}>Aprendendo a programar na navegação estilo NavDrawer</Text>
        </View>
    )
} 

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
export default Aula05;
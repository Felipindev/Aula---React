import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Hr from './Hr';
import * as Animar from 'react-native-animatable'

const Aula07 = () =>{
    return(
        <Animar.View animation='jello' duration={1000} delay={100} style={styles.container}>
            <Text style={styles.title}>Aula 07 | Estilos de navegação tab's e Animação</Text>
            <Text style={styles.title2}>Aprendendo a programar na navegação estilo NavBottomTab e NavTopTabs e aprendendo animações no app</Text>
            <Hr/>
            <Animar.Text animation='fadeInLeft'>Texto animado</Animar.Text>
            <Animar.Text animation='fadeInUp' delay={100}>Texto animado</Animar.Text>
            <Animar.Text animation='flipInY' delay={100} iterationCount={'infinite'}>Texto 3 com tempo infinito</Animar.Text>
            <Animar.Image source={require('../assets/logo.png')}
            style={{width:100, height:100}} animation='lightSpeedIn' delay={100} iterationCount={'infinite'}/>

        </Animar.View>
    )
} 
export default Aula07;

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

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Aula02_Flexbox = () =>{
    return(
        <View style={styles.conteudo}>
            <Text style={styles.box}>1</Text>
            <Text style={styles.box}>2</Text>
            <Text style={styles.box}>3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ff2345',
        height:100,
        padding: 10,
    },
    box:{
        width: 50,
        height: 50,
        backgroundColor: '#ff4321',
        textAlign: 'center',
        lineHeight: 50,
    }
})

export default Aula02_Flexbox
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Hr from './Hr';

const Aula04 = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Aula 04 | Navegações</Text>
            <Hr/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'aliceblue',
        alignItems: 'center',
        padding: 60,
        borderRadius: 15,
        marginBottom:20,
    },
    texto:{
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
    },

})
export default Aula04
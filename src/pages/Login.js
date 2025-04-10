import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LinearGradient colors={['#6a11cb', '#2575fc']} style={styles.container}>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.subtitle}>Faça login para continuar</Text>

            <TextInput
                style={styles.input}
                placeholder="Usuário"
                placeholderTextColor="#aaa"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#aaa"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuPrincipal')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#ddd',
        marginBottom: 30,
    },
    input: {
        width: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        color: '#fff',
        fontSize: 16,
    },
    button: {
        width: '50%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#2575fc',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Login;
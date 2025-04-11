import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animar from 'react-native-animatable';
import { SlideInLeft, SlideInUp } from 'react-native-reanimated';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LinearGradient colors={['#6a11cb', '#2575fc']} style={styles.container}>
            <Animar.View animation='fadeInUp' duration={1000} style={styles.border}>
            <Animar.Text animation='slideInLeft' duration={1000} delay={200} style={styles.title}>Bem-vindo</Animar.Text>
            <Animar.Text animation='slideInLeft' duration={1000} delay={200} style={styles.subtitle}>Faça login para continuar</Animar.Text>

            <Animar.View animation='slideInLeft' duration={1000} delay={200} style={styles.buttonContainer2}>
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
            </Animar.View>

            <Animar.View animation='slideInLeft' duration={1000} delay={200} style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuPrincipal')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            </Animar.View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuPrincipal')}>
                    <Text style={styles.buttonText}>Entrar Drawer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuTopTab')}>
                    <Text style={styles.buttonText}>Entrar Top Tab</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuBottomTab')}>
                    <Text style={styles.buttonText}>Entrar Bottom Tab</Text>
                </TouchableOpacity>
            </Animar.View>
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
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        color: '#fff',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#2575fc',
        fontSize: 18,
        fontWeight: 'bold',
    },
    border: {
        borderWidth: 2,
        borderColor: '#fff',
        padding: 40,
        paddingVertical: 100,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        gap: 10,
    },
});

export default Login;
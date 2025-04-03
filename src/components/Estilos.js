import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
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
    textin:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    input :{
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    button: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 25,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10, // Para sombra no Android
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(45deg, #6a11cb, #2575fc)', // Gradiente
        borderWidth: 2,
        borderColor: '#fff',
    },
})

export default Style
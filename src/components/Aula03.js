import  React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import Hr from './Hr'

const Aula03 = () => {
    //lista de objetos (vetor)
    const turmas = [
        {id: 1, turma: '1º ano', alunos: 30, pontos: 10},
        {id: 2, turma: '2º ano', alunos: 25, pontos: 20},
        {id: 3, turma: '3º ano', alunos: 20, pontos: 4},
        {id: 4, turma: '4º ano', alunos: 15, pontos: 14},
        {id: 5, turma: '5º ano', alunos: 10, pontos: 13},
        {id: 6, turma: '6º ano', alunos: 5, pontos: 8},
    ]

    const exibirItensLista = ({item}) => (
        <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemTurma}>{item.turma}</Text>
            <Text style={styles.itemAlunos}>Alunos: {item.alunos}</Text>
            <Text style={styles.itemPontos}>Pontos: {item.pontos}</Text>
        </View>
    )

    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.texto}>Aula 03 | Listas com FlatList</Text>
            <Text style={styles.textin}>Aprendendo a manipular uma lista em React Native e o componente</Text>
            <Hr/>
            <Text style={styles.textin}>Lista com MAP</Text>
            {/* lista de objetos com map */}
            {
                turmas.map((linha) => (
                    <View key={linha.id} style={styles.itemContainer}>
                        <Text style={styles.itemTurma}>{linha.turma}</Text>
                        <Text style={styles.itemAlunos}>Alunos: {linha.alunos}</Text>
                        <Text style={styles.itemPontos}>Pontos: {linha.pontos}</Text>
                    </View>
                ))
            }<br/>
            <Hr/>
            <Text style={styles.textin}>Lista com FlatList</Text>
            {/* lista de objetos com FlatList */}
            <FlatList 
                style={{width: '100%'}}
                data={turmas} //passar o vetor de objetos como propriedade 'data'
                renderItem={exibirItensLista} //passar a função que vai exibir os itens da lista como propriedade 'renderItem'
                keyExtractor={(item) => item.id} //passar um id unico para cada item da lista como propriedade 'keyExtractor'
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'aliceblue',
        alignItems: 'center',
        padding: 60,
        borderRadius: 15,
        marginBottom:20,
        paddingBottom: 20,
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
    itemContainer: {
        backgroundColor: '#f0f8ff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        width: '90%',
        alignSelf: 'center',
    },
    itemTurma: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    itemAlunos: {
        fontSize: 16,
        color: '#555',
    },
    itemPontos: {
        fontSize: 16,
        color: '#555',
    },
})

export default Aula03
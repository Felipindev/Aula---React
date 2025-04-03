import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import Cadastro from './Cadastro'
import Relatorio from './Relatorio'
import Grafico from './Grafico'

const Stack = createNativeStackNavigator()

const NavStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {/* em name colocamos o nome que damos a cada tela */}
                {/* em component colocamos o nome do arquivo da tela */}
                <Stack.Screen name='home' component={Home}/>
                <Stack.Screen name='cadastro' component={Cadastro}/>
                <Stack.Screen name='relatorio' component={Relatorio}/>
                <Stack.Screen name='grafico' component={Grafico}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavStack
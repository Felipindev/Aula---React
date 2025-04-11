import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import Cadastro from './Cadastro'
import Relatorio from './Relatorio'
import Grafico from './Grafico'
import Login from './Login'
import NavDrawer from './NavDrawer'
import NavTopTabs from './NavTopTabs'
import NavBottomTab from './NavBottomTabs'

const Stack = createNativeStackNavigator()

const NavStack = () => {
    return(
        // <NavigationContainer>
            <Stack.Navigator>
                {/* em name colocamos o nome que damos a cada tela */}
                {/* em component colocamos o nome do arquivo da tela */}
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='MenuPrincipal' component={NavDrawer} options={{headerShown: false}}/>
                <Stack.Screen name='MenuTopTab' component={NavTopTabs} options={{headerShown: false}}/>
                <Stack.Screen name='MenuBottomTab' component={NavBottomTab} options={{headerShown: false}}/>
                
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Cadastro' component={Cadastro}/>
                <Stack.Screen name='Relatorio' component={Relatorio}/>
                <Stack.Screen name='Grafico' component={Grafico}/>
            </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default NavStack
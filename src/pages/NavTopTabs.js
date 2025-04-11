import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Home from './Home'
import Cadastro from './Cadastro'
import Relatorio from './Relatorio'
import Grafico from './Grafico'

const tab = createMaterialTopTabNavigator()

const NavTopTabs = () => {
    return(
        // <NavigationContainer>
            <tab.Navigator>
                <tab.Screen name='Home' component={Home}/>
                <tab.Screen name='Cadastro' component={Cadastro}/>
                <tab.Screen name='Relatorio' component={Relatorio}/>
                <tab.Screen name='Grafico' component={Grafico}/>
            </tab.Navigator>
        // </NavigationContainer>
    )
}

export default NavTopTabs
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// telas que vamos navegar
import Home from "../pages/Home";
import Aula01 from '../components/Aula01'
import Aula2 from '../components/Aula02'
import Aula02_Flexbox from "../components/Aula02_Flexbox";
import Aula3 from '../components/Aula03'
import Aula4 from '../components/Aula04'
import Aula05 from '../components/Aula05'
//import dos icons
import {Ionicons, Entypo} from '@expo/vector-icons';

// configuração do drawer navvigator 
const Drawer = createDrawerNavigator()

const NavDrawer = () => {
    return (
        //<NavigationContainer>
            <Drawer.Navigator
               // initialRouteName é a tela que vai abrir quando o app abrir
                initialRouteName='Home'
                // screenOptions é um objeto que contém as configurações do drawer (cor de fundo, cor do texto, etc)
                screenOptions={{
                    // aqui colocamos a cor de fundo do drawer quando ativo
                    drawerActiveBackgroundColor: '#222',
                    // aqui colocamos a cor do texto do drawer quando ativo
                    drawerActiveTintColor: '#fff',
                    // aqui criamos um objeto com as configurações do estilo do drawer
                    drawerStyle:{
                        backgroundColor: '#444',
                        width: 240,
                        paddingTop: 50,
                        width: 240,
                    },
                    // aqui criamos um objeto com as configurações do estilo de cada etiqueta do drawer
                    drawerLabelStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#f1f1f1',
                    }
                }}
            >
                <Drawer.Screen name='Home' component={Home}
                options={{
                        // aqui criamos um objeto com as configurações do estilo do icone do drawer
                        drawerIcon: () => (
                            <Ionicons name='home-outline' size={24} color='#fff'/>
                        ),
                        // aqui criamos um objeto com as configurações do estilo do texto do drawer
                        drawerLabelStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#f1f1f1',
                        }
                    }}
                />

                <Drawer.Screen name='Aula1' component={Aula01}
                    options={{
                        // aqui criamos um objeto com as configurações do estilo do icone do drawer
                        drawerIcon: () => (
                            <Ionicons name='bookmark-outline' size={24} color='#fff'/>
                        ),
                        // aqui criamos um objeto com as configurações do estilo do texto do drawer
                        drawerLabelStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#f1f1f1',
                        }
                    }}
                />
                <Drawer.Screen name='Aula2' component={Aula2}
                    options={{
                        // aqui criamos um objeto com as configurações do estilo do icone do drawer
                        drawerIcon: () => (
                            <Ionicons name='bookmark-outline' size={24} color='#fff'/>
                        ),
                        // aqui criamos um objeto com as configurações do estilo do texto do drawer
                        drawerLabelStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#f1f1f1',
                        }
                    }}
                />
                <Drawer.Screen name='Aula02_Flexbox' component={Aula02_Flexbox}
                    options={{
                        // aqui criamos um objeto com as configurações do estilo do icone do drawer
                        drawerIcon: () => (
                            <Ionicons name='bookmark-outline' size={24} color='#fff'/>
                        ),
                        // aqui criamos um objeto com as configurações do estilo do texto do drawer
                        drawerLabelStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#f1f1f1',
                        }
                    }}
                />
                <Drawer.Screen name='Aula3' component={Aula3}
                    options={{
                        // aqui criamos um objeto com as configurações do estilo do icone do drawer
                        drawerIcon: () => (
                            <Ionicons name='bookmark-outline' size={24} color='#fff'/>
                        ),
                        // aqui criamos um objeto com as configurações do estilo do texto do drawer
                        drawerLabelStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#f1f1f1',
                        }
                    }}
                />
                <Drawer.Screen name='Aula4' component={Aula4}
                    options={{
                        // aqui criamos um objeto com as configurações do estilo do icone do drawer
                        drawerIcon: () => (
                            <Ionicons name='bookmark-outline' size={24} color='#fff'/>
                        ),
                        // aqui criamos um objeto com as configurações do estilo do texto do drawer
                        drawerLabelStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#f1f1f1',
                        }
                    }}
                />
                <Drawer.Screen name='Aula5' component={Aula05}
                    options={{
                        // aqui criamos um objeto com as configurações do estilo do icone do drawer
                        drawerIcon: () => (
                            <Ionicons name='bookmark-outline' size={24} color='#fff'/>
                        ),
                        // aqui criamos um objeto com as configurações do estilo do texto do drawer
                        drawerLabelStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#f1f1f1',
                        }
                    }}
                />
            </Drawer.Navigator>
        //</NavigationContainer>
    )
}
export default NavDrawer
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Grafico from './Grafico';

const Tab = createBottomTabNavigator();

const NavBottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: '#28849e',
                tabBarInactiveTintColor: '#aaa',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name="home" color={color} size={size || 30} />
                    ),
                    title: 'Início',
                }}
            />
            <Tab.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="person-add" color={color} size={size || 30} />
                    ),
                    title: 'Cadastro',
                }}
            />
            <Tab.Screen
                name="Relatorio"
                component={Relatorio}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="bar-chart" color={color} size={size || 30} />
                    ),
                    title: 'Relatório',
                }}
            />
            <Tab.Screen
                name="Grafico"
                component={Grafico}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="pie-chart" color={color} size={size || 30} />
                    ),
                    title: 'Gráfico',
                }}
            />
        </Tab.Navigator>
    );
};

export default NavBottomTabs;
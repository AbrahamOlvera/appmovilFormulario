import React from 'react';
import {View, StyleSheet, Alert, TextInput,Button,} from 'react-native';
import { Container,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registro from './src/Registro';
import Login from './src/Login';
import Principal from './src/Principal';
import Indicator from './src/Indicator';
import Conocenos from './src/Conocenos';
import Movies from './src/Movies';
import Planetas from './src/Planetas';
//Nombre: Olvera González Abraham
//Grupo: TI02SM-18


const Stack = createStackNavigator();

const App:  () => React$Node = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="Login" 
        component={Login} />
        <Stack.Screen 
        name="Movies" 
        component={Movies} />
        <Stack.Screen 
        name="Planetas" 
        component={Planetas} />
        <Stack.Screen 
        name="Conocenos" 
        component={Conocenos} />
        <Stack.Screen 
        name="Registro" 
        component={Registro} />
         <Stack.Screen 
        name="Principal" 
        component={Principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
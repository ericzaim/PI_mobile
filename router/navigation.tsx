import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/inicio';
import Cadastro from '../pages/cadastro';
import Loja from '../pages/loja';

// Tipagem das rotas
export type RootStackParamList = {
  Home: undefined;
  Cadastro: undefined;
  Loja:undefined;
};

//<Stack.Screen name="Loja" component={Loja} />
const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Loja" component={Loja} />
    </Stack.Navigator>
  );
}

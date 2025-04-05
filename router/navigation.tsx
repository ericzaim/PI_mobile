import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../pages/home';
import CadastroPage from '../pages/cadastro';

export type RootStackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Cadastro" component={CadastroPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

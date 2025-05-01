import { useAuth } from '../context/auth';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Botao from './components/botao';
import { styles } from './styles';
import Input, { InputSenha } from './components/input';
import { router } from 'expo-router';

export default function App() {
  const { user, handleLogin, setUser } = useAuth();

  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps='always'
        enableOnAndroid={true}
        extraScrollHeight={20}
      >
        <View style={styles.container}>
          <Text style={homestyles.text}>Bem-vindo{'\n'}ao{'\n'}HabitTracker</Text>
          <Text style={{ fontFamily: 'LeagueSpartan-Black', fontSize: 22, fontWeight: '900', marginBottom: '3%' }}>
            Faça Login ou Cadastre-se
          </Text>
          <View style={homestyles.containerbotoes}>
            <Input
              style={{ marginBottom: '3%', marginTop: '15%', backgroundColor: 'rgb(235, 235, 235)' }}
              value={user.email}
              placeholder="email@email.com"
              onChangeText={text => setUser({ ...user, email: text })}
            />
            <InputSenha />
          </View>
          <View style={homestyles.linha}></View>
          <Botao
            style={{ marginBottom: '3%', marginTop: '5%' }}
            backgroundColor="rgb(255, 196, 0)"
            title="Login"
            onPress={() => handleLogin(user)}
          />
          <Botao
            backgroundColor="rgb(117, 117, 117)"
            title="Cadastre-se"
            onPress={() => router.push('cadastro')}
          />
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}

const homestyles = StyleSheet.create({
  text: {
    fontFamily: 'LeagueSpartan-Black',
    fontSize: 38,
    fontWeight: 900,
    textAlign: 'center',
    width: '90%',
    marginTop: '10%',
    marginBottom: '10%',
  },
  containerbotoes: {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  butcadas: {
    color: 'rgba(255, 196, 0, 0.27)',
  },
  linha: {
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(136, 136, 136, 0.36)',
    width: '80%',
    marginBottom: '10%',
  },
});

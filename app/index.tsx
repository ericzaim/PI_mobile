import { useAuth } from '../context/auth';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BotaoG } from './components/botao';
import { styles } from './styles';
import Input, { InputSenha } from './components/input';
import { router } from 'expo-router';
import BotaoY from './components/botao';


export default function App() {
  const { user,setUser } = useAuth();
  const [ senha,setSenha ] = useState('')

  return (
    <ImageBackground
      source={require('../assets/images/cadastro.jpg')}
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
            <Text
            style={{
              fontFamily: 'LeagueSpartan-Black',
              fontSize: 22,
              fontWeight: '900',
              marginBottom: '3%',
              color: 'white',
              textShadowColor: 'rgb(104, 104, 104) 0)',
              textShadowOffset: { width: 3, height: 3 },
              textShadowRadius: 3,
            }}
            >
            Faça Login ou Cadastre-se
            </Text>
          <View style={homestyles.containerbotoes}>
            <Input
              style={{ marginBottom: '3%', marginTop: '15%',backgroundColor: 'rgb(235, 235, 235)' }}
              value={user.email}
              placeholder="email@email.com"
              onChangeText={text => setUser({ ...user, email: text })}
            />
            <InputSenha 
            value={senha} 
            onChangeText={(senha) => setSenha(senha) }/>
          </View>
          <View style={[styles.linha,{ marginBottom: '10%' }]}></View>
          <BotaoY
            style={{ marginBottom: '3%', marginTop: '5%' }}
            title="Login"
            onPress={()=>router.push('tasks')/*() => handleLogin(user)*/}
          />
          <BotaoG
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
    color:'white'
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
});

import { useAuth } from '../../context/auth'
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import Botao from '../components/botao';
import { styles } from '../styles';
import Input from '../components/input';
import Icon from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';

export default function App() {
  const { user, handleLogin, setUser } = useAuth()
  const [ocultarSenha, setOcultarSenha] = useState(true);


  return (
    <View style={styles.container}>
      <Text style={homestyles.text}>Bem-vindo{'\n'}ao{'\n'}Grupo Agrococ</Text>
      <Text style={{fontFamily:'LeagueSpartan-Black', fontSize:22,fontWeight:'900',marginBottom:'3%'}}>Faça Login ou Cadastre-se</Text>
        <View style={homestyles.containerbotoes}>
          <Input 
          style={{marginBottom:'3%'}} 
          value={user.email} 
          placeholder='email@email.com'
          onChangeText={text => setUser({...user, email: text})} //...user salva todos os outros atributos e altera apenas o email para o text
          >
          </Input>
        <View style={styles.containersenha}>
          <TextInput
            style={styles.senha}
              value={user.senha} 
              placeholder='Senha'
              onChangeText={text => setUser({...user,senha:text})} 
              secureTextEntry={ocultarSenha}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
          />
          <View style={{alignSelf:'center'}}>
            <TouchableOpacity onPress={() => setOcultarSenha(!ocultarSenha)}>
            <Icon 
            name={ocultarSenha ? "eye-off" : "eye"} 
            size={20} 
            color="gray"
            />
            </TouchableOpacity>
          </View>
        </View>

      <Botao 
        style={{marginBottom:'2%'}} 
        title="Login" 
        onPress={handleLogin} 
      />

      <Botao 
      title="Cadastre-se" 
      onPress={() => router.push('/Cadastro')} 
      />

        <View style={homestyles.or}>
          <View style={homestyles.linha}/>
          <Text style={{color:'rgba(0, 0, 0, 0.2)',marginHorizontal: 5}}>ou</Text>
          <View style={homestyles.linha}/>
        </View>

          <TouchableOpacity style={homestyles.botaogoogle}>
            <Text>Login com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homestyles.botaogoogle}>
            <Text>Login com Facebook</Text>
          </TouchableOpacity>

        </View>
    </View>
  )
}

const homestyles = StyleSheet.create({
  text:{
    fontFamily: 'LeagueSpartan-Black',
    fontSize: 38,
    fontWeight: 900,
    textAlign:'center',
    width:'90%',
    marginTop: '10%',
    marginBottom: '10%',
  },
  containerbotoes:{
    width: "90%", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: 'space-between',
  },
  botao:{
    width:'90%',
    marginBottom:'2%',
  },
  or:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    width: '80%',
    marginBottom:25,
  },
  linha:{
    borderBottomWidth: 1,
    borderBottomColor:'rgba(0, 0, 0, 0.2)',
    width: '50%',
  },
  botaogoogle:{
    backgroundColor:'lightgrey',
    padding:'2%',
    width: '90%',
    alignItems:'center',
    borderRadius:6,
    marginBottom:6,
    fontFamily:'Arial'
  }
})
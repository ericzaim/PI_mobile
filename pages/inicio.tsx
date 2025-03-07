import React, { useState,useContext, isValidElement } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../router/navigation';
import Botao from '../components/botao';
import { styles } from '../styles';
import Input from '../components/input';
import Icon from 'react-native-vector-icons/Feather';
import { useFonts } from 'expo-font';

// Tipagem das props da tela
type Props = StackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ocultarSenha, setOcultarSenha] = useState(true);

  const fontsLoaded = useFonts({
    'LeagueSpartan-Black': require('../assets/fonts/LeagueSpartan-Black.ttf'),
    'LeagueSpartan': require('../assets/fonts/LeagueSpartan-Regular.ttf'),
  });
  return (
    <View style={styles.container}>
      <Text style={homestyles.text}>Bem-vindo{'\n'}ao{'\n'}Grupo Agrococ</Text>
      <Text style={{fontFamily:'LeagueSpartan-Black', fontSize:22,fontWeight:'900',marginBottom:'3%'}}>Faça Login ou Cadastre-se</Text>
      <View style={homestyles.containerbotoes}>
        <Input style={{marginBottom:'3%'}} value={email} placeholder='email@email.com' onChangeText={(email:string)=>{setEmail(email)}}></Input>
        <View style={styles.containersenha}>
         <TextInput
                style={styles.senha}
                value={senha} 
                placeholder='Senha'
                onChangeText={(senha:string)=>{setSenha(senha)}} 
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
        <Botao style={{marginBottom:'2%'}} title="Login" onPress={() => navigation.navigate('Loja')} />
        <Botao title="Cadastre-se" onPress={() => navigation.navigate('Cadastro')} />
        <View style={homestyles.or}>
        <View style={homestyles.linha}/>
        <Text style={{color:'rgba(0, 0, 0, 0.2)',marginHorizontal: 5}}>ou</Text>
        <View style={homestyles.linha}/>
        </View>
        <TouchableOpacity style={homestyles.botaogoogle}><Text>Login com Google</Text></TouchableOpacity>
        <TouchableOpacity style={homestyles.botaogoogle}><Text>Login com Facebook</Text></TouchableOpacity>
      </View>
    </View>
  );
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
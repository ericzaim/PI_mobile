import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../components/logo';
import Botao from '../components/botao';
import Input from '../components/input';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from '../styles';
import { router } from 'expo-router';

export default function Cadastro() {
  const [email,setEmail]=useState('');
  const [senha,setSenha]=useState('');
  const [ocultarSenha, setOcultarSenha] = useState(true);
  const [handleEmail,setHandleEmail] = useState(true)

  const isValidEmail = () => {
    return email.includes('@') && (email.includes('.com') || email.includes('.com.br'));
  }
  
  return (
    <View style={[styles.container,{backgroundColor:'#008dff'}]}>
    <Logo/>
    <View 
    style={{
      backgroundColor:'white',
      borderRadius:10, 
      justifyContent:'center',
      alignItems:'center',
      padding:'5%'}}
      >
    <View>
    <Text style={{width:'80%', color:handleEmail ? 'rgba(0, 0, 0, 0)': 'red',marginVertical:'1%',justifyContent:'flex-start'}}>Email inválido</Text>
    <Input 
    style={{marginBottom:'3%'}}
    value={`${email}`} 
    placeholder={'email@email.com'} 
    onChangeText={(text) => setEmail(text)}
    />
    <View style={styles.containersenha}>
      <TextInput
        style={[styles.senha,]}
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
            color="grey"
          />
        </TouchableOpacity>
      </View>
    </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
      <Botao title="Voltar" style={
          {
            width:'45%',
            borderColor:'grey',
            borderWidth:1
          }
        } 
        onPress={() => router.push('Inicio')}
      />
      <Botao title="Cadastrar" style={{
        width:'45%',
        marginLeft:'2%',
        borderColor:'grey',
        borderWidth:1 }} 
        onPress={()=>{
          if(isValidEmail() == true){
          setHandleEmail(true),
          router.push('Inicio')
        }else{
            setHandleEmail(false)
          }
        }
      }/>
    </View>
    </View>
    <Text style={{alignSelf:'center',margin:'10%'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum mi turpis,
      sed faucibus magna fringilla id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
      per inceptos himenaeos. Quisque ultrices ex magna, ut molestie ex iaculis mollis. Maecenas aliquet euismod mattis.
      Cras est mauris, ultricies eu sagittis sed, ornare ut dui. Vestibulum faucibus laoreet libero quis ullamcorper.
      Aenean augue nunc, sodales sit amet dui eu, pulvinar vehicula lectus.</Text>
    </View>
    );
}
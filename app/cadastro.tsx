import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native';
import Logo from './components/logo';
import { BotaoG } from './components/botao';
import Input, { InputSenha } from './components/input';
import { styles } from './styles';
import { router } from 'expo-router';
import { postUser } from './api';
import { AuthProvider, IUser } from '../context/auth';
import BotaoY from './components/botao';

export default function Cadastro() {
  const [email,setEmail]=useState('');
  const [handleEmail,setHandleEmail] = useState(true);
  const [senha,setSenha] = useState('');


  const isValidEmail = () => {
    return email.includes('@') && (email.includes('.com') || email.includes('.com.br'));
  }
  
  return (
    <ImageBackground
    source={require('../assets/images/cadastro.jpg')}
    style={styles.background}
    resizeMode="cover">

    <View style={styles.container}>
    <Logo/>
    <View 
    style={{
      width:'90%',
      backgroundColor:'white',
      borderRadius:10, 
      justifyContent:'center',
      alignItems:'center',
      padding:'5%'}}
      >
    <View>
    <Text style={{width:'80%', color:handleEmail ? 'rgba(0, 0, 0, 0)': 'red',marginVertical:'1%',justifyContent:'flex-start'}}>Email inválido</Text>
    <Input 
    style={{marginBottom:'3%',backgroundColor:'rgb(235, 235, 235)'}}
    value={`${email}`} 
    placeholder={'email@email.com'} 
    onChangeText={(text) => setEmail(text)}
    />
    <InputSenha 
    value={senha} 
    onChangeText={(senha)=>{setSenha(senha)}}/>
    </View>
     <View style={{flexDirection:'row',justifyContent:'center',width:'50%'}}>
      <BotaoG title="Voltar" style={
          {
            width:'100%',
            borderColor:'grey',
            borderWidth:1
          }          
        }
        backgroundColor="rgb(117, 117, 117)"
        onPress={() => router.push('/')}
      />
      <BotaoY title="Cadastrar" style={{
        width:'100%',
        marginLeft:'2%',
        borderColor:'grey',
        borderWidth:1,
       }}
        backgroundColor="rgb(255, 196, 0)"
        onPress={()=>{
          if(isValidEmail() == false){
            Alert.alert('Invalid email', 'Use um email válido!!', [{
              text: 'Close',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },{
                text: 'OK', 
                onPress: () => console.log('OK Pressed')
              },
            ]);
          }else{
            postUser({email,senha})
            router.push('/')
          }
        }
      }
        />
    </View>
    </View>
    <Text style={{alignSelf:'center',margin:'10%',color:'white'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum mi turpis,
      sed faucibus magna fringilla id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
      per inceptos himenaeos. Quisque ultrices ex magna, ut molestie ex iaculis mollis. Maecenas aliquet euismod mattis.
      Cras est mauris, ultricies eu sagittis sed, ornare ut dui. Vestibulum faucibus laoreet libero quis ullamcorper.
      Aenean augue nunc, sodales sit amet dui eu, pulvinar vehicula lectus.</Text>
    </View>
    </ImageBackground>
    );
}
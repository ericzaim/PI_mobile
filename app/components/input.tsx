import { useState } from 'react';
import { View, TextInput, StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/auth';
import Icon from 'react-native-vector-icons/Feather';
import { postUser } from '../api';

interface InputProps{ 
  value:string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  style?:StyleProp<ViewStyle>;
}

export default function Input({ value,style, onChangeText, placeholder }:InputProps){
  return (
    <View style={[inputStyles.container, style]}>
      <TextInput
        style={[inputStyles.input]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
      />
    </View>
  );
};

export function InputSenha({ value , onChangeText}:InputProps){
    const [ocultarSenha, setOcultarSenha] = useState(true);
   
  return(
    <View style={inputStyles.containersenha}>
              <TextInput
                style={inputStyles.senha}
                  value={ value } 
                  placeholder='Senha'
                  onChangeText= { onChangeText } 
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
  )
}

export const inputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    width:'90%',
   
  },
  input: {
    width: '100%',
    fontStyle:'italic',
    padding: 8
  },
  containersenha:{
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    marginBottom:'10%',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    width:'90%',
    backgroundColor:'rgb(235, 235, 235)'
  },
  senha: {
    padding:8,
    width:'94%',
    fontStyle:'italic',
  },
})
/*justifyContent: 'center',
alignItems: 'center',
width:'80%',
backgroundColor:'green'*/

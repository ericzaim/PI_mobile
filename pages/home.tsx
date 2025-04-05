import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/logo';
import Botao from '../components/botao';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import navigation, { RootStackParamList } from '../router/navigation';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export default function HomePage({ navigation }: Props){

      return (
        <View style={styles.container}>
          <Logo style={styles.logo}/>
          <Text style={styles.text}>Mist</Text>
          <Botao title={'Iniciar'} onPress={() => navigation.navigate('Cadastro')}/>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      logo:{
        margin: 50,
        width: 150, 
        height: 150,
        justifyContent: 'center',
        alignSelf:'center'
      },
      text:{
        color:'white',
        fontSize:72,
        fontFamily:'Papyrus',
      },
      container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    });
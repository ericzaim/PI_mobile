import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/logo';
import Botao from './components/botao';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo}/>
      <Text style={styles.text}>Mist</Text>
      <Botao title={'Iniciar'} onPress={()=>{console.log('botao pressionado')}}/>
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

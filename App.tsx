import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo}/>
      <Text style={styles.text}>Mist</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    width: 300, 
    height: 300
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
    justifyContent: 'center',
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logo:{
      fontFamily: 'LeagueSpartan-Black',
      fontSize: 48,
      fontWeight:900,
      color:'white',
      textShadowColor:'black',
      textShadowRadius:2,
      textShadowOffset:{ width: 4, height: 3 }
    },
    text:{
      color:'Black',
      fontSize:72,
      fontWeight:'bold'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      width:'100%'
    },
    background:{
      flex:1,
    },
    header:{
      height: 'auto',
      backgroundColor: 'steelblue',
      flexDirection: 'row',
    },
    linha: {
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(136, 136, 136, 0.60)',
    width: '80%',
  },
});

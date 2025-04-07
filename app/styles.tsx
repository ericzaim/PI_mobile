import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logo:{
      fontFamily: 'LeagueSpartan-Black',
      fontSize: 72,
      fontWeight:900,
      marginVertical:'10%',
      color:'white',
      textShadowColor:'black',
      textShadowRadius:5,
      textShadowOffset:{ width: -4, height: -1 }
    },
    text:{
      color:'Black',
      fontSize:72,
      fontWeight:'bold'
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width:'100%'
    },
    header:{
      height: 'auto',
      backgroundColor: 'steelblue',
      flexDirection: 'row',
    },
    containersenha:{
      flexDirection: "row",
      alignItems: "flex-start",
      paddingHorizontal: 10,
      marginBottom:40,
      borderWidth: 2,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 10,
      width:'90%',
    },
    senha: {
      padding:8,
      width:'94%',
      fontStyle:'italic',
    },
  });

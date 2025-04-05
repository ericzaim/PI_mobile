import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface BotaoProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  onPress:() => void
}

export default function Botao({onPress,title, backgroundColor = '#e8f221', textColor = 'black' }: BotaoProps) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={(onPress)}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      position: 'absolute',
      bottom: 50,
      width: '80%',
      paddingVertical: 15,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Papyrus'
    },
  });
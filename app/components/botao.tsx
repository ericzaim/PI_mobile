import { TouchableOpacity, Text, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface BotaoProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  onPress:() => void
  style?: StyleProp<ViewStyle>;
}

export default function Botao({onPress,title,style, backgroundColor , textColor = 'white' }: BotaoProps) {
  return (
    <TouchableOpacity style={[styles.button,style, { backgroundColor }]} onPress={(onPress)}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    bottom: 20,
    width: '90%',
    paddingVertical: '2%',
    borderRadius: 8,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: 'rgb(255, 196, 0)'
  },
    text: {
      fontSize: 14,
      fontWeight:'bold',
      color: 'black',
      zIndex: -1,
      textShadowOffset: { width: 2, height:1},
      textShadowRadius: 1,
      textShadowColor: 'black',
  },});
import { TouchableOpacity, Text, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface BotaoProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  onPress:() => void
  style?: StyleProp<ViewStyle>;
}

export default function Botao({onPress,title,style, backgroundColor = '#0070ff', textColor = 'white' }: BotaoProps) {
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
  },
    text: {
      fontSize: 14,
    },
  });
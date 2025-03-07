import { View, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface InputProps{ 
  value:string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?:StyleProp<ViewStyle>;
}

export default function Input({ value,style, onChangeText, placeholder, secureTextEntry }:InputProps){
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[styles.input]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
})
/*justifyContent: 'center',
alignItems: 'center',
width:'80%',
backgroundColor:'green'*/
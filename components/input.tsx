import { Text,TextInput, StyleSheet} from "react-native";

interface InputProps{
email?:string,
nome?:string,
senha?:string,
value:string,
}

export default function Input({email,nome,senha,value}:InputProps){
    return(
        <TextInput>
            <Text style={styles.text}>
            </Text>
        </TextInput>
    )
}

const styles= StyleSheet.create({
    text:{
        fontStyle:`italic`
    }
})
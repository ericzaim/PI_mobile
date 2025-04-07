
import { styles } from "../styles"
import { Text,View,ScrollView,Dimensions } from "react-native"
import Botao from "../components/botao";
import Card from "../components/card";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

export default function Loja(){
    return(
        <View>
        <Text style={styles.text}>Loja</Text>
        <Card style={{}}/>
        <Botao title="Voltar" onPress={() => router.push('inicio')}/>
        </View>
    )
}
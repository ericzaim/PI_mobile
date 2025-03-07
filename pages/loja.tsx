import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../styles"
import { Text,View,ScrollView,Dimensions } from "react-native"
import { RootStackParamList } from "../router/navigation";
import Botao from "../components/botao";
import Card from "../components/card";

const { width } = Dimensions.get("window");

type Props = StackScreenProps<RootStackParamList, 'Loja'>;

export default function Loja({ navigation }: Props){
    return(
        <View>
        <Text style={styles.text}>Loja</Text>
        <Card style={{}}/>
        <Botao title="Voltar" onPress={() => navigation.goBack()}/>
        </View>
    )
}
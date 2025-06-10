
import { styles } from "./styles"
import { ImageBackground, Text,View } from "react-native"
import Botao, { BotaoG } from "./components/botao";
import MyCheckbox from "./components/checkbox";
import { router } from "expo-router";
import { postTask } from "./api";
import Input from "./components/input";
import Logo from "./components/logo";
import * as Notifications from 'expo-notifications';

export interface TaskProps{
    taskName:string
    taskDesc?:string
    taskHour?:number
    taskCompleted?:boolean
    taskIsDaily?:boolean
    userID:number
}

async function notify(task: TaskProps) {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
        alert('Permissão para notificações não concedida!');
        return;
    }

    if (!task.taskHour) return;

    const now = new Date();
    const trigger = new Date(now);
    trigger.setHours(task.taskHour, 0, 0, 0);

    if (trigger <= now) {
        trigger.setDate(trigger.getDate() + 1);
    }
    await Notifications.scheduleNotificationAsync({
        content: {
            title: `${task.taskName}`,
            body: task.taskDesc,
            sound: true,
        },trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour: task.taskHour,
            minute: 0,

            },
    });
}

export default function Tasks(task:TaskProps){
    return(
        <ImageBackground
            source={require('../assets/images/cadastro.jpg')}
            style={styles.background}
            resizeMode="cover">
        <Logo style={{alignSelf:'center',color:'white', marginTop:'15%',marginBottom:'5%'}}/>
        <View style={[styles.linha, {alignSelf:'center',marginBottom:'5%'}]}></View>
        <Text style={{alignSelf:'center',marginVertical:'5%',fontSize:40,fontWeight:'600'}}>Adicionar Tarefa</Text>
        <View style={{flex:1,alignItems: 'center',marginTop:'5%'}}>
            <Input 
                value={task.taskName} 
                placeholder={"Nome da Task"}
                style={{backgroundColor: 'rgb(235, 235, 235)', margin: '3%'}} 
                onChangeText={() => {}}/>
            <Input 
                value={task.taskName} 
                placeholder={"Descricao Task"}
                style={{backgroundColor: 'rgb(235, 235, 235)', marginBottom: '2%'}}  
                onChangeText={() => {}}/>
            <MyCheckbox>
                <Text style={{fontSize: 16, color: 'white'}}>Tarefa diária</Text>
            </MyCheckbox>
        </View>
        <View style={{flex:1,alignItems:'center',marginTop:'5%'

            
        }}>
        <Botao 
            title={"Adicionar nova tarefa"}
            style = {{marginBottom:'2%',borderColor:'rgb(255, 255, 255)',borderWidth:1.5}}
            onPress={()=>{postTask(task)}}/>
        <div style={{flexDirection:'row'}}>
            <BotaoG 
                title="Voltar" 
                style={{borderColor:'rgb(255, 255, 255)',borderWidth:1.5,width:'50%'}}
                onPress={() => router.back()}/>
            <BotaoG
                title="Ver Tasks" 
                style={{borderColor:'rgb(255, 255, 255)',borderWidth:1.5, width:'50%'}}
                onPress={() => router.push('/taskview')}
            />
        </div>
        </View>
        </ImageBackground>
    )
}
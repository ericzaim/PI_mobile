
import { styles } from "./styles"
import { ImageBackground, Text,View } from "react-native"
import Botao, { BotaoG } from "./components/botao";
import { router, Tabs } from "expo-router";
import { postTask } from "./api";
import Input from "./components/input";
import { useState } from "react";



export interface TaskProps{
    taskName:string
    taskDesc:string
    taskHour:number
    taskCompleted:boolean
}

export default function Tasks(task:TaskProps){
    return(
        <ImageBackground
        source={require('../assets/images/tasks.jpg')}
        style={styles.background}
        resizeMode="cover">
        <Text style={styles.text}>Habits</Text>
        <View style={{alignItems:'center'}}>
        <Input 
        value={task.taskName} 
        placeholder={"Nome da Task"}
        style={{backgroundColor: 'rgb(235, 235, 235)',margin:'2%'}} 
        onChangeText={() =>{}}/>
        <Input 
        value={task.taskName} 
        placeholder={"Descricao Task"}
        style={{backgroundColor: 'rgb(235, 235, 235)',marginBottom:'10%'}}  
        onChangeText={() =>{}}/>
        <Botao 
        title={"Adicionar Objetivo"}
        style = {{marginBottom:'2%',borderColor:'rgb(0, 0, 0)',borderWidth:1.5}}
        onPress={()=>{postTask(task)}}/>
        <BotaoG 
        title="Voltar" 
        style={{borderColor:'rgb(0, 0, 0)',borderWidth:1.5}}
        onPress={() => router.back()}/>
        </View>
        </ImageBackground>
    )
}
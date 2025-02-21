import { Image, ImageStyle, StyleProp } from "react-native";

interface LogoProps {
    style?: StyleProp<ImageStyle>;
  }

export default function Logo({style}:LogoProps){
    return(
        <Image source={{uri: 'mist.jpeg',}} style={style}/>
    )
}
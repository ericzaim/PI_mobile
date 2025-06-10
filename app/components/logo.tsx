import { Text, TextStyle } from 'react-native';
import { styles } from "../pages/styles/styles";

interface LogoProps {
    style?: TextStyle; 
}

export default function Logo({ style }: LogoProps) {
    return (
        <Text style={[styles.logo, style]}>HabitTracker</Text>
    );
}

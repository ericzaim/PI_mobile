import { Slot } from "expo-router"
import { AuthProvider } from "../context/auth"
import { useFonts } from 'expo-font';

export default function Layout() {
    const fontsLoaded = useFonts({
          'LeagueSpartan-Black': require('../assets/fonts/LeagueSpartan-Black.ttf'),
          'LeagueSpartan': require('../assets/fonts/LeagueSpartan-Regular.ttf'),
        });
        
  return (
     <AuthProvider>
       <Slot />
    </AuthProvider>
  )
}
/*
   */
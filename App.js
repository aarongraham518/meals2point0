import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';
// const isAndroid = Platform.OS === 'android';/

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
    {/* not context api, but styled-componenent */}
    <ThemeProvider theme={theme}>
    <RestaurantsScreen/>
    </ThemeProvider>
    
    <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({

});

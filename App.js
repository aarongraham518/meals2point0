import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';
// const isAndroid = Platform.OS === 'android';/

export default function App() {
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

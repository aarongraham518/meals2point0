import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';
// const isAndroid = Platform.OS === 'android';/

export default function App() {
  return (
    <>
    
    <RestaurantsScreen/>
    <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({

});

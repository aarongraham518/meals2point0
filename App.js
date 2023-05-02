import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { SafeArea } from "./src/components/utility/safe-area-component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants-context";
import { LocationContextProvider } from "./src/services/location/location.context";

const Tab = createBottomTabNavigator();
// const isAndroid = Platform.OS === 'android';/

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

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

  function SettingsScreen() {
    return (
      <SafeArea>
        <Text>Settings Screen</Text>
      </SafeArea>
    );
  }

  function MapScreen() {
    return (
      <SafeArea>
        <Text>Map Screen</Text>
      </SafeArea>
    );
  }

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  return (
    <>
      {/* not context api, but styled-componenent */}
      <ThemeProvider theme={theme}>
      <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
                }}
              >
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});

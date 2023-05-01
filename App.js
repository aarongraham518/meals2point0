import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { SafeArea } from "./src/components/utility/safe-area-component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
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
  return (
    <>
      {/* not context api, but styled-componenent */}
      <ThemeProvider theme={theme}>
        {/* <RestaurantsScreen/> */}
        <NavigationContainer>
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Restaurants") {
                iconName = "md-restaurant";
              } else if (route.name === "Settings") {
                iconName = "md-settings";
              } else if (route.name === "Map") {
                iconName = "md-map";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
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
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});

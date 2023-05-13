import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Platform } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants-context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCAzat7H7BFSWJ8CtVA5osiBIrm8O7guJg",
  authDomain: "mealstogo-c75f0.firebaseapp.com",
  projectId: "mealstogo-c75f0",
  storageBucket: "mealstogo-c75f0.appspot.com",
  messagingSenderId: "917491214769",
  appId: "1:917491214769:web:df46be45c4e6a9be1e7590"
};

initializeApp(firebaseConfig);

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
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});

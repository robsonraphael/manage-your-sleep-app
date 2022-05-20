import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Screens */
import Intro from "./src/pages/intro";
import Entry from "./src/pages/entry";

const Stack: any = createNativeStackNavigator();

/* Fonts */
import {
  useFonts,
  Roboto_300Light,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import {
  Outfit_300Light,
  Outfit_500Medium,
  Outfit_700Bold,
} from "@expo-google-fonts/outfit";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_700Bold,
    Roboto_400Regular,
    Outfit_300Light,
    Outfit_500Medium,
    Outfit_700Bold,
  });
  if (!fontsLoaded) {
    return <></>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="Home"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Entry"
          component={Entry}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

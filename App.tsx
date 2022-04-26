import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Screens */
import Intro from "./src/pages/Intro";
import SignIn from "./src/pages/SignIn";

const Stack: any = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Intro} />
        <Stack.Screen name="signIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
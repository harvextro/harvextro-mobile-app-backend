import React from "react";
// NavigationContainer manages the navigation tree of the app
// It keeps track of the navigation state and links the app to the navigation system
import { NavigationContainer } from "@react-navigation/native";
// createStackNavigator creates a stack-based navigation (like pages on top of each other)
import { createStackNavigator } from "@react-navigation/stack";

// Import the screens that will be part of navigation (from FE)
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";

// Create a stack navigator object - manage transitions between screens
const Stack = createStackNavigator();

// Main Navigation Component - controls which screen appears in the app
export default function Navigation() {
  return (

    // provides navigation functionality to all screens
    <NavigationContainer>

      // manages the screen stack
      <Stack.Navigator>

        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />


      </Stack.Navigator>

    </NavigationContainer>

  );
}

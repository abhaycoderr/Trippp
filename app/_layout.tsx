import React, { useState } from "react";
import { CreateTripContext } from "@/context/CreateTripContext";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import { Stack } from "expo-router"; // Use Stack from expo-router
import Chat from '../components/Chat/Chat'; // Adjust the path as needed


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  const [tripData, setTripData] = useState<any>({});

  // If fonts are not loaded yet, return a loading screen or null
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="chat" component={Chat} options={{ title: 'Chat' }} /> New Chat Screen */}
    </Stack>
  </CreateTripContext.Provider>
  );
}

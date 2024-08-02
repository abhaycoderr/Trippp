import { CreateTripContext } from "@/context/CreateTripContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  const [tripData, setTripData] = useState<any>({});

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack>
        {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CreateTripContext.Provider>
  );
}

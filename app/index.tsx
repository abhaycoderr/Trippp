import React, { useEffect, useState } from "react";
import Login from "@/components/Login";
import { Redirect } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { auth } from "@/configs/firebaseConfig";

export default function Index() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  // Show loading spinner while checking auth state
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {user ? (
        <Redirect href={"/(tabs)"} />
      ) : (
        <Login />
      )}
    </View>
  );
}

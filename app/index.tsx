import Login from "@/components/Login";
import { Redirect } from "expo-router";
import { View } from "react-native";
import { auth } from "@/configs/firebaseConfig";

export default function Index() {

  // const user = auth.currentUser;
  const user = true;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ?
        <Redirect href={"/(tabs)/myTrip"} /> : <Login />
      }
    </View>
  );
}

// Front-End reference/guide video: https://www.youtube.com/watch?v=mxXJSVW4tRY
// Backend reference/guide videos: 
//  pt1: https://www.youtube.com/watch?v=8psijC5ezkc        --> Stopped @22:32
//  pt2: https://www.youtube.com/watch?v=-m-4_DRLmrc
//  pt3: https://www.youtube.com/watch?v=pqQGU-JsD7k

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatsScreen from "./src/screens/ChatsScreen";
import ChatScreen from "./src/screens/ChatScreen";
import Navigator from "./src/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
  },
});

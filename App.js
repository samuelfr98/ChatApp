// Front-End reference/guide video: https://www.youtube.com/watch?v=mxXJSVW4tRY
// Backend reference/guide videos:
//  pt1: https://www.youtube.com/watch?v=8psijC5ezkc        --> Stopped @121:24 ; might have to check his GitHub link from video description
//  pt2: https://www.youtube.com/watch?v=-m-4_DRLmrc
//  pt3: https://www.youtube.com/watch?v=pqQGU-JsD7k

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation";
import { Amplify } from "aws-amplify"; // for most backend tools
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native"; // for most ui tools

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
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

// To style, set buttons directly and style ui. onPress, use state to get user inputs
// (username, password) and call provided AWS out of the box functions to interact with backend
// StyleSheet.create({


// })

export default withAuthenticator(App); // withAuthenticator manages user signing in and signing up

// Front-End reference/guide video: https://www.youtube.com/watch?v=mxXJSVW4tRY
// Backend reference/guide videos:
//  pt1: https://www.youtube.com/watch?v=8psijC5ezkc        --> Stopped @2:28:25 ; chats are not specific for each user/duplicate chats with same users can be created. 
//  pt2: https://www.youtube.com/watch?v=-m-4_DRLmrc
//  pt3: https://www.youtube.com/watch?v=pqQGU-JsD7k

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify"; // for most backend tools
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native"; // for most ui tools
import { useEffect } from "react";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  useEffect(() => {

    // Syncs User managed data in backend with all Authenticated Users. Short term solution before writing lambda function to manages this all in the backend.
    const syncUser = async () => {
      // get Auth user
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      console.log(authUser);

      // query the database using Auth user id (sub)
      const userData = await API.graphql(
        graphqlOperation(getUser, { id: authUser.attributes.sub })
      );
      console.log(userData);

      if (userData.data.getUser) {
        console.log("User already exists in database");
        return;
      }

      // if user DNE, create one.
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.attributes.phone_number,
        status: "Hey, this is my default status. Pee pee poo poo",
      };
      const newUserResponse = await API.graphql(
        graphqlOperation(createUser, { input: newUser })
      );
    };

    syncUser();
  }, []);

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

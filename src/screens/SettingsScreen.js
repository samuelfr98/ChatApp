import { View, Text, Button } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Sign out" onPress={() => Auth.signOut()}/>
    </View>
  );
};

export default SettingsScreen;

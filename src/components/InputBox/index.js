import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const InputBox = () => {
  // state data
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.warn('Sending new message: ',newMessage);

    setNewMessage('')
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      {/* Icon */}
      <AntDesign name="plus" size={20} color="royalblue" />

      {/* Text input bar */}
      <TextInput
        style={styles.input}
        placeholder="poo or pee?"
        value={newMessage}
        onChangeText={setNewMessage}
      />

      {/* Icon */}
      <MaterialIcons
        style={styles.send}
        name="send"
        size={16}
        color="white"
        onPress={onSend}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
    paddingHorizontal: 10,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    fontSize: 16,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 12,
    overflow: "hidden",
  },
});
export default InputBox;

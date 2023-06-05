import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createChatRoom, createUserChatRoom } from "../../graphql/mutations";

dayjs.extend(relativeTime);

const ContactListItem = ({
  user,
  WhutonPress = () => {},
  selectable = false,
  isSelected = false,
}) => {
  const navigation = useNavigation();

  const onPress = async () => {
    console.warn("Pressed");

    // Check if we already have a ChatRoom with user

    // Create a new ChatRoom
    const newChatRoomData = await API.graphql(
      graphqlOperation(createChatRoom, {
        input: {},
      })
    );
    console.log(newChatRoomData);

    if (!newChatRoomData.data?.createChatRoom) {
      console.log("Error creating the chat room");
    }
    const newChatRoom = newChatRoomData.data?.createChatRoom;
    // Add the clicked user to the ChatRoom
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: {
          chatRoomId: newChatRoom.id,
          userId: user.id,
        },
      })
    );

    // Add the auth user to the ChatRoom
    const authUser = await Auth.currentAuthenticatedUser();
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: {
          chatRoomId: newChatRoom.id,
          userId: authUser.attributes.sub,
        },
      })
    );

    // Navigate to the newly created ChatRoom
    navigation.navigate("Chat", { id: newChatRoom.id });
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: user.image }} style={styles.image} />

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {user.name}
        </Text>

        <Text numberOfLines={2} style={styles.subtitle}>
          {user.status}
        </Text>
      </View>
      {selectable &&
        (isSelected ? (
          <AntDesign name="checkcircle" size={24} color="royalblue" />
        ) : (
          <FontAwesome name="circle-thin" size={24} color="lightgray" />
        ))}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: "center", 
  },
  content: {
    flex: 1,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: "lightgray",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    // flex: 1
  },
  subtitle: {
    color: "gray",
  },
});

export default ContactListItem;

import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

dayjs.extend(relativeTime);

const ContactListItem = ({
  user,
  onPress = () => {},
  selectable = false,
  isSelected = false,
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        // navigation.navigate("Contacts", { id: user.id, name: user.name });
        onPress;
      }}
    >
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
    marginRight: 5,
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

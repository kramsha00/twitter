import React from "react";
import { Button, Text, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title={"New tweet"}
        onPress={() => navigation.navigate("NewTweet")}
      ></Button>

      <Button
        title={"Profile"}
        onPress={() => navigation.navigate("Profile")}
      ></Button>

      <Button
        title={"View tweet"}
        onPress={() => navigation.navigate("ViewTweet")}
      ></Button>
    </View>
  );
}

export default HomeScreen;

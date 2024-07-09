import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import TweetsList from "../components/Tweet";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TweetsList data={DATA}></TweetsList>
      {/*<Button*/}
      {/*  title={"New tweet"}*/}
      {/*  onPress={() => navigation.navigate("NewTweet")}*/}
      {/*></Button>*/}

      {/*<Button*/}
      {/*  title={"Profile"}*/}
      {/*  onPress={() => navigation.navigate("Profile")}*/}
      {/*></Button>*/}

      {/*<Button*/}
      {/*  title={"View tweet"}*/}
      {/*  onPress={() => navigation.navigate("ViewTweet")}*/}
      {/*></Button>*/}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

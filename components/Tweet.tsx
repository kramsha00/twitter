import * as React from "react";

import { FlatList, Text, View, Image } from "react-native";
import styles from "../styles/Style";

const tweetItem = ({ item }) => (
  <View style={styles.tweetContainer}>
    <Image
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
      style={styles.avatar}
    />
    <View style={styles.tweetBody}>
      <Text className="text-lg font-medium text-blue-800">{item.title}</Text>
      <Text className="text-red-400">some description for now</Text>
      <View style={styles.iconContainer}></View>
    </View>
  </View>
);

const TweetsList = (props) => (
  <View style={styles.container}>
    <FlatList
      style={styles.tweetList}
      data={props.data}
      renderItem={tweetItem}
      keyExtractor={(item) => item.id}
    />
  </View>
);

export default TweetsList;

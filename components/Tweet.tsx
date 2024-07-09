import * as React from "react";

import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles/Style";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TweetItem = ({ item, navigation }) => {
  return (
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>

      <View style={styles.tweetBody}>
        <View className="flex flex-row items-center gap-1">
          <Text className="text-lg text-slate-700 font-semibold">
            {item.title}
          </Text>
          <Text className="text-sm text-slate-400">@{item.username}</Text>
        </View>
        <Text className="text-slate-600 text-wrap">{item.content}</Text>
        {item.images && item.images.length > 0 && (
          <View style={styles.imageContainer}>
            {item.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image.url }}
                style={styles.tweetImage}
                accessibilityLabel={image.altText}
              />
            ))}
          </View>
        )}
        <View style={styles.iconContainer}>
          <View className="flex flex-row text-slate-400">
            <EvilIcons name="comment" size={24} color="text-slate-400" />
            <Text className="text-sm text-slate-400">12</Text>
          </View>
          <View className="flex flex-row text-slate-400">
            <EvilIcons name="retweet" size={24} color="text-slate-400" />
            <Text className="text-sm text-slate-400">12</Text>
          </View>
          <View className="flex flex-row text-slate-400">
            <EvilIcons name="heart" size={24} color="text-slate-400" />
            <Text className="text-sm text-slate-400">12</Text>
          </View>
          <View className="flex flex-row text-slate-400">
            <Feather name="bar-chart-2" size={18} color="text-slate-400" />
            <Text className="text-sm text-slate-400">12</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const TweetsList = (props) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TweetItem item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.tweetList}
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TweetsList;

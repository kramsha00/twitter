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
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View className="flex flex-row items-center gap-1">
            <Text className="text-lg text-slate-700 font-semibold">
              {item.title}
            </Text>
            <Text className="text-sm text-slate-400">@{item.username}</Text>
            <Text>&middot;</Text>
            <Text className="text-sm text-slate-400">9m</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexShrink: 1 }}
          onPress={() => navigation.navigate("ViewTweet", { item: item })}
        >
          <Text className="text-slate-600 text-wrap">{item.content}</Text>
        </TouchableOpacity>
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
          <TouchableOpacity>
            <View className="flex flex-row text-slate-400">
              <EvilIcons name="comment" size={24} color="gray" />
              <Text className="text-sm text-slate-400">34</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex flex-row text-slate-400">
              <EvilIcons name="retweet" size={24} color="gray" />
              <Text className="text-sm text-slate-400">12</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex flex-row text-slate-400">
              <EvilIcons name="heart" size={24} color="gray" />
              <Text className="text-sm text-slate-400">1,563</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex flex-row text-slate-400">
              <Feather name="bar-chart-2" size={18} color="gray" />
              <Text className="text-sm text-slate-400">12</Text>
            </View>
          </TouchableOpacity>
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

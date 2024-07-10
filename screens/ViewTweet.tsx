import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

function ViewTweet({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
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
            <View className="flex flex-col">
              <Text className="text-lg text-slate-700 font-semibold">
                {item.title}
              </Text>
              <Text className="text-md text-slate-400 -mt-1">
                @{item.username}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexShrink: 1,
          marginTop: 10,
          marginHorizontal: 10,
          borderBottomColor: "#e5e7eb",
          borderBottomWidth: 1,
        }}
      >
        <Text className="text-lg text-slate-600 text-wrap">{item.content}</Text>

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

        <View style={{ marginTop: 10 }} className="my-2 flex flex-row gap-1">
          <Text className="text-md text-slate-400">2:12 AM</Text>
          <Text className="text-slate-400">&middot;</Text>
          <Text className="text-md text-slate-400">07/07/2024 From Earth</Text>
          <Text className="text-slate-400">&middot;</Text>
          <View
            className="flex flex-row items-center"
            style={{ alignItems: "center" }}
          >
            <Text className="text-md font-bold">354</Text>
            <Text className="text-md text-slate-400 "> Views</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexShrink: 1,
          margin: 10,
          paddingBottom: 10,
          borderBottomColor: "#e5e7eb",
          borderBottomWidth: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <Text className="font-bold">34</Text>
          <Text className="text-md text-slate-400"> Replies</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <Text className="font-bold">12</Text>
          <Text className="text-md text-slate-400"> Reposts</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <Text className="font-bold">1,563</Text>
          <Text className="text-md text-slate-400"> Likes</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <View className="flex flex-row text-slate-400">
            <EvilIcons name="comment" size={28} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex flex-row text-slate-400">
            <EvilIcons name="retweet" size={28} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex flex-row text-slate-400">
            <EvilIcons name="heart" size={28} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex flex-row text-slate-400">
            <EvilIcons
              name={Platform.OS === "ios" ? "share-apple" : "share-android"}
              size={28}
              color="gray"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ViewTweet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tweetContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
  },
  tweetBody: {
    flexShrink: 1,
    flexDirection: "column",
    marginHorizontal: 10,
    paddingRight: 10,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  tweetList: {
    marginHorizontal: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  tweetImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
});

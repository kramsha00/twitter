import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import TweetsList from "../components/Tweet";
import { Tweet } from "../types";

let Tweets: Tweet[] = [
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Ramsha Khalid",
    username: "kramsha00",
    content:
      "Ut ut accumsan urna. " +
      "Suspendisse vulputate ipsum convallis eros commodo consectetur. " +
      "Inter dum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
    title: "Ramsha Khalid",
    username: "kramsha00",
    content:
      "Ut ut accumsan urna. " +
      "Suspendisse vulputate ipsum convallis eros commodo consectetur. " +
      "Inter dum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d78",
    title: "Ramsha Khalid",
    username: "kramsha00",
    content:
      "Nunc ac turpis porttitor, sollicitudin eros vel, orn are tortor. " +
      "Ut neque velit, semper eget rhoncus ut, volutpat in quam.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603029084766-3ddc1c5c7e94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Image 1 description",
      },
      {
        url: "https://images.unsplash.com/photo-1544194215-541c2d3561a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Image 2 description",
      },
    ],
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bg",
    title: "Ramsha Khalid",
    username: "kramsha00",
    content:
      "Lorem ipsum dolor sit amet, consectetur adi pi scing elit. " +
      "Ut blandit est augue, ut commodo diam aliquet sed. " +
      "Phasellus non neque at lorem semper egestas." +
      "Ut ut accumsan urna.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603029084766-3ddc1c5c7e94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Image 1 description",
      },
    ],
  },
];

function Profile() {
  useEffect(() => {
    console.log("From profile page");
  }, []);
  console.log("Rendering Profile component");
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1544194215-541c2d3561a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.banner}
      />
      <View
        style={{ marginLeft: 6, marginHorizontal: 10, marginTop: 10 }}
        className="flex flex-row justify-between"
      >
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.avatar}
          className="-mt-8"
        />
        <TouchableOpacity>
          <View className="bg-slate-950 px-10 py-2 rounded-full">
            <Text className="text-slate-100 font-semibold text-md">Follow</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <View className="flex flex-row gap-1">
          <Text className="font-extrabold text-xl text-slate-900">
            Ramsha Khalid
          </Text>
          <MaterialIcons name="verified" size={18} color="#007BFF" />
        </View>
        <Text className="text-lg text-slate-400 -mt-1">@kramsha00</Text>
        <View className="mt-4">
          <Text className="text-md text-slate-600">On the edge of sanity.</Text>
          <Text className="text-md text-slate-600">
            Software Engineer 👩🏻‍💻 · Artist 🎨
          </Text>
          <View className="flex flex-row flex-wrap gap-y-1 pt-4">
            <View className="flex flex-row gap-0.5 mr-2">
              <Ionicons name="balloon-outline" size={18} color="#94a3b8" />
              <Text className="text-sm text-slate-400">Born 4 October</Text>
            </View>
            <View className="flex flex-row gap-0.5 mr-3">
              <Ionicons name="location-outline" size={18} color="#94a3b8" />
              <Text className="text-sm text-slate-400">Bahrain</Text>
            </View>
            <View className="flex flex-row gap-1">
              <AntDesign name="calendar" size={16} color="#94a3b8" />
              <Text className="text-sm text-slate-400">Joined July 2018</Text>
            </View>
          </View>
        </View>
        <View
          className="mt-4 pb-4"
          style={{
            flexShrink: 1,
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
            <Text className="text-md text-slate-400"> Followers</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <Text className="font-bold">12</Text>
            <Text className="text-md text-slate-400"> Following</Text>
          </View>
        </View>
      </View>
      <TweetsList data={Tweets} />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: "white",
  },
  banner: {
    height: "25%",
  },
});

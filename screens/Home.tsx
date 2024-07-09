import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import TweetsList from "../components/Tweet";
import { Feather } from "@expo/vector-icons";

interface Tweet {
  id: string;
  title: string;
  username: string;
  content?: string;
  images?: Image[];
}

interface Image {
  url: string;
  altText: string;
}

let Tweets: Tweet[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Lashes",
    username: "lashes98",
    content:
      "Lorem ipsum dolor sit amet, consectetur adi pi scing elit. " +
      "Ut blandit est augue, ut commodo diam aliquet sed. " +
      "Phasellus non neque at lorem semper egestas." +
      "Ut ut accumsan urna.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1685450127565-d07f2377fbc2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Image 1 description",
      },
      {
        url: "https://images.unsplash.com/photo-1544194215-541c2d3561a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Image 2 description",
      },
      {
        url: "https://images.unsplash.com/photo-1603029084766-3ddc1c5c7e94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Image 1 description",
      },
    ],
  },
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
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Your fellow coder",
    username: "kindcoder",
    content:
      "Nunc ac turpis porttitor, sollicitudin eros vel, orn are tortor. " +
      "Ut neque velit, semper eget rhoncus ut, volutpat in quam.",
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
    title: "Your fellow coder",
    username: "kindcoder",
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
    title: "Lashes",
    username: "lashes98",
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

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TweetsList data={Tweets}></TweetsList>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("NewTweet")}
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  fab: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#007BFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8, // Add shadow for Android
    shadowColor: "#000", // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

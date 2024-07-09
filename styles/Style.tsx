import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tweetContainer: {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
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
    justifyContent: "space-between",
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
    marginVertical: 10,
  },
  tweetImage: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
});

export default styles;

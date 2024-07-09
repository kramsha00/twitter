import * as React from "react"
import {FlatList, StyleSheet, Text, View} from "react-native";

const tweetItem = ({item}) => <View style={styles.tweet}>
	<Text style={styles.text}> {item.data.title} </Text>
</View>

const TweetsList = (props) => (
	<View>
		<FlatList
			data={props.data}
			renderItem={tweetItem}
			keyExtractor={item => item.data.id}
		/>
	</View>
)
export default TweetsList

const styles = StyleSheet.create({
	text: {
		color: '#da8ae0',
	},
	tweet: {
		backgroundColor: '#ddd',
		padding: 5,
		margin: 5,
		flexDirection: "row"
	}
});

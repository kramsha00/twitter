import { StatusBar } from 'expo-status-bar';
import {
    ActivityIndicator,
    Alert,
    Button,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import TweetsList from "./components/Tweet";
import {useEffect, useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Explore" component={Explore} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/*<Button title={'Go to Explore'} onPress={()=> navigation.navigate('Explore')}></Button>*/}
        <Button title={'Explore'} onPress={()=>navigation.navigate('Explore')} />
      </View>
  );
}


function Explore() {

  const [text, setText] = useState('Initial value');
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.reddit.com/r/Cooking.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(resultsFromServer => {
          setTweets(resultsFromServer.data.children);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  function pressMe(){
    Alert.alert("Custom button pressed")
  }

  return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Hello, this is my test {text}!
          </Text>
          <Button
              title="Press me"
              onPress={() => Alert.alert('Simple Button pressed')}
          />
          <TouchableOpacity style={styles.button} onPress={pressMe}>
            <Text style={styles.text}>Press Me Touchable</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 60}}>
          <Pressable
              onPressIn={()=> console.log("Press in")}
              onLongPress={()=> console.log("Long press")}
              onPressOut={()=> console.log("Press out")}
              hitSlop={30}>
            <Text style={styles.text}>Pressable</Text>
          </Pressable>
        </View>
        <SafeAreaView>
          <TextInput
              style={styles.input}
              value={text}
              onChangeText={setText}
          />
          <TweetsList data={tweets}></TweetsList>
        </SafeAreaView>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      marginTop: 90
  },
    text: {
        color: '#da8ae0'
    },
    button: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#dddddd'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

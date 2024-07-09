import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default function App() {
  return (
      <View>
          <Text>
              Hello twitter!
          </Text>
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
});

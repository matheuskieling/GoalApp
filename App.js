import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Goal' />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    width: "100%",
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  }
});
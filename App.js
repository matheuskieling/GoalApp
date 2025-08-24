import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import StyleButton from "./Components/StyleButton";
import {useState} from "react";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [input, setInput] = useState("");

  const handleAddGoal = () => {
    if (input.trim().length > 0) {
      setGoals([...goals, input]);
      setInput("");
    }
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Goal' value={input} onChangeText={(text) => setInput(text)} />
        <StyleButton title="Add Goal" backgroundColor={"#fab"} color={"black"} onPress={handleAddGoal} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals:</Text>
        {goals.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  goalsContainer: {
    flex: 10,
  }
});
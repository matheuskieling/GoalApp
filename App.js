import {
  Button, FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import StyleButton from "./Components/StyleButton";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [input, setInput] = useState("");

  const handleAddGoal = () => {
    if (input.trim().length > 0) {
      setGoals((oldValue) => [...oldValue, input.trim()]);
      setInput("");
    }
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          value={input}
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={handleAddGoal}
        />
        <StyleButton
          title="Add Goal"
          backgroundColor={"green"}
          color={"white"}
          onPress={handleAddGoal}
        />
      </View>
      <View
        style={styles.goalsContainer}
      >
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <View style={styles.goalsListItem}>
              <Text>{itemData.item}</Text>
            </View>
          }}
          keyExtractor={(key, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    flex: 1,
    paddingHorizontal: 20,
  },
  inputContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  goalsContainer: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 20,
  },
  goalsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  goalsListItem: {
    padding: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#aaa",
    marginBottom: 5,
    boxShadow: "1px 1px 5px rgba(0,0,0,0.2)"
  }
});

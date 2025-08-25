import {Modal, StyleSheet, TextInput, View} from "react-native";
import StyleButton from "./StyleButton";
import {useState} from "react";

export default function GoalInput({ onSubmit }) {
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = () => {
    setIsVisible(false);
    onSubmit(input.trim());
    setInput("");
  }

  return (
    <>
      <View style={{height: 50}}>
        <StyleButton
          title="Add new goal"
          backgroundColor={"green"}
          color={"white"}
          onPress={() => setIsVisible(true)}
        />
      </View>
      <Modal visible={isVisible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Goal"
            value={input}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={handleSubmit}
          />
          <StyleButton
            title="Add Goal"
            backgroundColor={"green"}
            color={"white"}
            onPress={handleSubmit}
          />
        </View>
      </Modal>
    </>

  )
}
const styles = StyleSheet.create({
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
})
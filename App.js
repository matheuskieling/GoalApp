import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.textWithBorder}
      >
        Hello World!
      </Text>
      <Button title={"Click me"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textWithBorder: {
    padding: 20,
    margin: 16,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 4,
  }
});

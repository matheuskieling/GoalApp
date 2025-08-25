import {FlatList, StyleSheet, View} from "react-native";
import GoalInput from "../Components/GoalInput";
import GoalItem from "../Components/GoalItem";
import useGoals from "../Hooks/useGoals";

export default function Goal() {
  const {
    goals,
    handleAddGoal,
    handleRemoveGoal
  } = useGoals();

  return <View style={styles.appContainer}>
    <GoalInput onSubmit={handleAddGoal} />
    <View
      style={styles.goalsContainer}
    >
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          const item = {text: itemData.item, index: itemData.index }
          return <GoalItem item={item} onPress={handleRemoveGoal} />
        }}
        keyExtractor={(key, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>

  </View>
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    flex: 1,
    paddingHorizontal: 20,
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
});

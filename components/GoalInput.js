import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEneterdGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEneterdGoalText(enteredText);
  }

  function addGoalhandler() {
    props.onAddGoal(enteredGoalText);
    setEneterdGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Type your goal here !"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalhandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

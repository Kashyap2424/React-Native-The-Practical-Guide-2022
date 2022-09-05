import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyling}>Hello World!</Text>
      <Text style={styles.textStyling}>Another Pices Of Text!</Text>
      <Button title="Click Here !" />
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
  textStyling: {
    margin: 16,
    borderWidth: 1,
    borderColor: "#000",
    padding: 16,
  },
});

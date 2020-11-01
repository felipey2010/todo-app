import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function InputBar(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={todoInput => props.textChange(todoInput)}
        value={props.todoInput}
        placeholder="Enter an activity"
        clearButtonMode="always"
      />
      <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.1,
  },
  input: {
    backgroundColor: "#363538",
    flex: 1,
    fontSize: 18,
    height: 35,
    color: "white",
  },
  addButton: {
    width: 100,
    backgroundColor: "#E6372C",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "700",
  },
});

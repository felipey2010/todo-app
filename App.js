import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Header from "./components/header";
import InputBar from "./components/inputBar";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoInput: "",
      todos: [
        { id: 0, title: "Test things", done: false },
        { id: 1, title: "Take dog out", done: false },
      ],
    };
  }

  addNewTodo() {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      todo: this.state.todoInput,
      done: false,
    });

    this.setState({
      todos,
      todoInput: "",
    });
  }

  render() {
    //check the platform
    const statusbar =
      Platform.OS == "ios" ? (
        <View style={styles.statusBarIOS}></View>
      ) : (
        <View style={styles.statusBarAndroid}></View>
      );

    return (
      <View style={styles.container}>
        {/* <StatusBar style="light-content" /> */}
        {statusbar}
        <Header title="todo-app" />
        <InputBar
          textChange={todoInput => this.setState({ todoInput })}
          addNewTodo={() => this.addNewTodo()}
        />
        <Text style={styles.text}>{this.state.todoInput}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEDEDE",
  },
  statusbarIOS: {
    height: Constants.statusBarHeight,
    backgroundColor: "#DBD5AF",
  },
  statusbarAndroid: {
    height: 45,
    backgroundColor: "#DBD5AF",
  },
  text: {
    color: "black",
  },
});

//Tutorial Link
//https://www.youtube.com/watch?v=NuZOwsmzcro

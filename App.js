import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Header from "./components/header";
import InputBar from "./components/inputBar";
import TodoItem from "./components/TodoItem";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoInput: "",
      todos: [],
    };
  }

  addNewTodo() {
    let todos = this.state.todos;
    let inputText = this.state.todoInput;

    //check for empty strings
    if (!inputText.trim()) {
      return;
    }
    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false,
    });

    this.setState({
      todos,
      todoInput: "",
    });
  }

  toggleDone(item) {
    let todos = this.state.todos;

    todos = todos.map(todo => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    this.setState({ todos });
  }

  removeTodo(item) {
    let todos = this.state.todos;

    todos = todos.filter(todo => todo.id !== item.id);

    this.setState({ todos });
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
          value={this.state.todoInput}
        />
        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
                removeTodo={() => this.removeTodo(item)}
              />
            );
          }}
        />
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

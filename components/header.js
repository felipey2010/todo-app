import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6372C",
  },
  title: {
    color: "#F3F3F3",
    fontSize: 28,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});

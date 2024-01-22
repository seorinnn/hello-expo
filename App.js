import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.container2}>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </View>
      <View style={styles.box5}></View>
      <View style={styles.box6}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    flexDirection: "row",
  },
  box1: {
    width: "100%",
    flex: 1,
    backgroundColor: "#00CCFF",
  },
  box2: {
    width: "100%",
    flex: 1,
    backgroundColor: "#0033FF",
  },
  box3: {
    flex: 1,
    backgroundColor: "white",
  },
  box4: {
    flex: 1,
    backgroundColor: "black",
  },
  box5: {
    width: "100%",
    flex: 1,
    backgroundColor: "#666666",
  },
  box6: {
    width: "100%",
    flex: 1,
    backgroundColor: "#FFFF00",
  },
});

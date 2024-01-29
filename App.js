import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    //day2
    <SafeAreaView style={styles.container}>
      <View style={styles.item1}></View>
      <View style={styles.item2}></View>
      <View style={styles.item3}>
        <View style={styles.itemRow1}></View>
        <View style={styles.itemRow2}></View>
        <View style={styles.itemRow3}></View>
        <View style={styles.itemRow4}></View>
      </View>
      <View style={styles.item4}></View>
      <View style={styles.item5}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  item1: {
    flex: 1,
    backgroundColor: "blue",
    borderWidth: 10,
    borderColor: "red",
  },
  item2: {
    flex: 2,
    backgroundColor: "green",
  },
  item3: {
    flex: 3,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "gray",
  },
  item4: {
    flex: 2,
    backgroundColor: "#660066",
  },
  item5: {
    flex: 1,
    backgroundColor: "#666600",
  },
  itemRow1: {
    flex: 1,
    backgroundColor: "#FF6633",
  },
  itemRow2: {
    flex: 2,
    backgroundColor: "#33FF66",
  },
  itemRow3: {
    flex: 2,
    backgroundColor: "#CC6633",
  },
  itemRow4: {
    flex: 1,
    backgroundColor: "#669900",
  },
});

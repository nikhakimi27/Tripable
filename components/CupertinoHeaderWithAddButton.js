import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoHeaderWithAddButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Go Back")}
        style={styles.button2}
      >
        <TouchableOpacity
          onPress={() => console.log("Navigate to HomeScreen")}
          style={styles.leftIconButton}
        >
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.leftIcon}
          ></IoniconsIcon>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.weather}>
          Weather
        </Text>
      </View>
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={styles.button}>
          <IoniconsIcon name="ios-add" style={styles.rightIcon}></IoniconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    paddingRight: 8,
    paddingLeft: 8
  },
  button2: {
    flex: 0.32,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "rgba(255,170,165,1)",
    fontSize: 32
  },
  back: {
    alignSelf: "center",
    fontSize: 17,
    paddingLeft: 5,
    color: "rgba(255,170,165,1)"
  },
  textWrapper: {
    flex: 0.43,
    alignItems: "center",
    justifyContent: "center"
  },
  weather: {
    fontSize: 17,
    lineHeight: 17,
    color: "#000"
  },
  rightWrapper: {
    flex: 0.25,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button: {},
  rightIcon: {
    backgroundColor: "transparent",
    color: "rgba(255,170,165,1)",
    fontSize: 32
  }
});

export default CupertinoHeaderWithAddButton;

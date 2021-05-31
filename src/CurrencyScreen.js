import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";

function CurrencyScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/currency_BG-01.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <TextInput placeholder="USD" style={styles.textInput}></TextInput>
      <TextInput placeholder="MYR" style={styles.textInput1}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 37
  },
  image: {
    width: 307,
    height: 307,
    marginTop: 396,
    alignSelf: "center"
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 32,
    width: 133,
    backgroundColor: "rgba(255,211,182,1)",
    borderWidth: 0,
    borderColor: "rgba(255,211,182,1)",
    borderRadius: 35,
    marginTop: -556,
    marginLeft: 47,
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 32,
    width: 133,
    backgroundColor: "rgba(255,211,182,1)",
    borderWidth: 0,
    borderColor: "rgba(255,211,182,1)",
    borderRadius: 35,
    marginTop: 14,
    marginLeft: 47
  }
});

export default CurrencyScreen;

import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text, Image } from "react-native";
import CupertinoButtonLight from "../components/CupertinoButtonLight";

function CueScreen(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type here to display for people to read!"
        style={styles.textInput}
      ></TextInput>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>
          Ask, tell, or seek help by {"\n"}showing this to anyone nearby!
        </Text>
        <Image
          source={require("../assets/images/cue_BG-01.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.cueCard}>Cue Card</Text>
      <CupertinoButtonLight
        style={styles.cupertinoButtonLight}
      ></CupertinoButtonLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 39,
    left: 30
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 137,
    width: 308,
    borderWidth: 6,
    borderColor: "rgba(252,248,243,1)",
    backgroundColor: "rgba(252,248,243,1)",
    borderRadius: 28,
    marginTop: 175,
    marginLeft: 26
  },
  loremIpsum: {
    top: 0,
    left: 66,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center"
  },
  image: {
    top: 6,
    left: 0,
    width: 324,
    height: 324,
    position: "absolute"
  },
  loremIpsumStack: {
    width: 324,
    height: 330,
    marginTop: 81,
    marginLeft: 18
  },
  cueCard: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: -588,
    marginLeft: 139
  },
  cupertinoButtonLight: {
    height: 44,
    width: 120,
    backgroundColor: "rgba(255,211,182,1)",
    borderWidth: 21,
    borderColor: "rgba(255,211,182,1)",
    borderRadius: 55,
    marginTop: 170,
    marginLeft: 115
  }
});

export default CueScreen;

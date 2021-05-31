import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";

function TrainScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <CupertinoSearchBarBasic
        style={styles.cupertinoSearchBarBasic}
      ></CupertinoSearchBarBasic>
      <View style={styles.monorailGroupRow}>
        <View style={styles.monorailGroup}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Monorail")}
            style={styles.monorailButton}
          >
            <Image
              source={require("../assets/images/icon_line_kl-monorail.png")}
              resizeMode="contain"
              style={styles.monorailIcon}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.klMonorailLine}>KL Monorail Line</Text>
        </View>
        <View style={styles.kelanajayaGroup}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Kelana Jaya")}
            style={styles.kelanajayaButton}
          >
            <Image
              source={require("../assets/images/icon_line_kelana-jaya_(1).png")}
              resizeMode="contain"
              style={styles.kelanajayaIcon}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.kelanaJayaLine}>Kelana Jaya Line</Text>
        </View>
      </View>
      <View style={styles.sripetalingGroupStackStack}>
        <View style={styles.sripetalingGroupStack}>
          <View style={styles.sripetalingGroup}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Sri Petaling")}
              style={styles.sripetalingButton}
            >
              <Image
                source={require("../assets/images/icon_line_sri-petaling.png")}
                resizeMode="contain"
                style={styles.sripetalingIcon}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.sriPetalingLine}>Sri Petaling Line</Text>
          </View>
          <Image
            source={require("../assets/images/train_BG.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.ampangGroup}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ampang")}
            style={styles.ampangButton}
          >
            <Image
              source={require("../assets/images/icon_line_ampang.png")}
              resizeMode="contain"
              style={styles.ampangIcon}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.ampangLine}>Ampang Line</Text>
        </View>
      </View>
      <Text style={styles.train}>Train</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoSearchBarBasic: {
    height: 44,
    width: 360,
    marginTop: 24,
    marginLeft: 1
  },
  monorailGroup: {
    width: 125,
    height: 135
  },
  monorailButton: {
    width: 112,
    height: 113,
    backgroundColor: "rgba(252,248,243,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 27,
    marginLeft: 7
  },
  monorailIcon: {
    width: 60,
    height: 60,
    marginTop: 26,
    marginLeft: 25
  },
  klMonorailLine: {
    fontFamily: "open-sans-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 2
  },
  kelanajayaGroup: {
    width: 123,
    height: 135,
    marginLeft: 34
  },
  kelanajayaButton: {
    width: 112,
    height: 113,
    backgroundColor: "rgba(252,248,243,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 27,
    marginLeft: 6
  },
  kelanajayaIcon: {
    width: 60,
    height: 60,
    marginTop: 26,
    marginLeft: 26
  },
  kelanaJayaLine: {
    fontFamily: "open-sans-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 2
  },
  monorailGroupRow: {
    height: 135,
    flexDirection: "row",
    marginTop: 107,
    marginLeft: 39,
    marginRight: 39
  },
  sripetalingGroup: {
    top: 0,
    left: 22,
    width: 121,
    height: 133,
    position: "absolute"
  },
  sripetalingButton: {
    width: 112,
    height: 113,
    backgroundColor: "rgba(252,248,243,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 27,
    marginLeft: 3
  },
  sripetalingIcon: {
    width: 62,
    height: 62,
    marginTop: 26,
    marginLeft: 26
  },
  sriPetalingLine: {
    fontFamily: "open-sans-700",
    color: "#121212",
    fontSize: 15
  },
  image: {
    top: 62,
    left: 0,
    width: 339,
    height: 339,
    position: "absolute"
  },
  sripetalingGroupStack: {
    top: 0,
    left: 0,
    width: 339,
    height: 401,
    position: "absolute"
  },
  ampangGroup: {
    top: 0,
    left: 182,
    width: 112,
    height: 133,
    position: "absolute"
  },
  ampangButton: {
    width: 112,
    height: 113,
    backgroundColor: "rgba(252,248,243,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 27
  },
  ampangIcon: {
    width: 60,
    height: 60,
    marginTop: 26,
    marginLeft: 26
  },
  ampangLine: {
    fontFamily: "open-sans-700",
    color: "#121212",
    fontSize: 15,
    marginLeft: 7
  },
  sripetalingGroupStackStack: {
    width: 339,
    height: 401,
    marginTop: 22,
    marginLeft: 21
  },
  train: {
    fontFamily: "open-sans-700",
    color: "rgba(105,132,116,1)",
    fontSize: 30,
    marginTop: -627,
    marginLeft: 141
  }
});

export default TrainScreen;

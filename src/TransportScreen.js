import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function TransportScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.bGBottomStack}>
        <Image
          source={require("../assets/images/transport_BG.png")}
          resizeMode="contain"
          style={styles.bGBottom}
        ></Image>
        <View style={styles.busGroup}>
          <View style={styles.busButton}>
            <Image
              source={require("../assets/images/icon_line_bus.png")}
              resizeMode="contain"
              style={styles.busIcon}
            ></Image>
          </View>
          <Text style={styles.bus}>Bus</Text>
        </View>
      </View>
      <View style={styles.trainGroup}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Train")}
          style={styles.trainButton}
        >
          <Image
            source={require("../assets/images/icon_line_kelana-jaya.png")}
            resizeMode="contain"
            style={styles.trainIcon}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.train}>Train</Text>
      </View>
      <Text style={styles.transportguide}>
        New to public transport in Malaysia?
      </Text>
      <Text style={styles.header}>Public Transport</Text>
      <Text style={styles.headerDesc}>
        Need to go somewhere on public transport? {"\n"}Plan your travel here!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 30,
    bottom: 39
  },
  bGBottom: {
    top: 56,
    left: 0,
    width: 371,
    height: 371,
    position: "absolute"
  },
  busGroup: {
    top: 0,
    left: 50,
    width: 248,
    height: 147,
    position: "absolute"
  },
  busButton: {
    width: 248,
    height: 113,
    backgroundColor: "rgba(252,248,243,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 27
  },
  busIcon: {
    width: 97,
    height: 97,
    marginTop: 8,
    marginLeft: 75
  },
  bus: {
    fontFamily: "open-sans-700",
    color: "#121212",
    fontSize: 25,
    marginLeft: 101
  },
  bGBottomStack: {
    width: 371,
    height: 427,
    marginTop: 331,
    marginLeft: 6
  },
  trainGroup: {
    width: 248,
    height: 147,
    marginTop: -586,
    marginLeft: 56
  },
  trainButton: {
    width: 248,
    height: 113,
    backgroundColor: "rgba(252,248,243,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 27
  },
  trainIcon: {
    width: 75,
    height: 75,
    marginTop: 19,
    marginLeft: 86
  },
  train: {
    fontFamily: "open-sans-700",
    color: "#121212",
    fontSize: 25,
    marginLeft: 94
  },
  transportguide: {
    fontFamily: "roboto-regular",
    color: "rgba(255,170,165,1)",
    marginTop: -172,
    marginLeft: 34
  },
  header: {
    fontFamily: "open-sans-700",
    color: "rgba(105,132,116,1)",
    fontSize: 30,
    marginTop: -104,
    marginLeft: 34
  },
  headerDesc: {
    fontFamily: "open-sans-regular",
    color: "rgba(105,132,116,1)",
    marginLeft: 34
  }
});

export default TransportScreen;

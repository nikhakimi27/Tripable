import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";

function Index({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/weather_BG.png")}
        resizeMode="contain"
        style={styles.bGBottom}
      ></Image>
      <CupertinoSearchBarBasic
        style={styles.cupertinoSearchBarBasic}
      ></CupertinoSearchBarBasic>
      <Text style={styles.checkweatherText}>
        Check the weather for your destination!
      </Text>
      <View style={styles.weatherGroup}>
        <View style={styles.weatherContainer}>
          <View style={styles.weatherIconRow}>
            <Image
              source={require("../assets/images/icon_weather/013-cloudy.png")}
              resizeMode="contain"
              style={styles.weatherIcon}
            ></Image>
            <Text style={styles.temperatureText}>30.4 °C</Text>
            <Text style={styles.weatherText}>Sunny</Text>
            <Text style={styles.locationText}>Ampang</Text>
          </View>
        </View>
      </View>
      <Text style={styles.yourcurrentlocationText}>Your current location:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 340,
    height: 620,
    left: 30,
    top: 20
  },
  bGBottom: {
    width: 340,
    height: 340,
    marginTop: 281,
    left: 13,
    top: 38
  },
  cupertinoSearchBarBasic: {
    height: 44,
    width: 251,
    marginTop: -404,
    marginLeft: 43
  },
  checkweatherText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -71,
    marginLeft: 47
  },
  weatherGroup: {
    width: 288,
    height: 125,
    marginTop: -167,
    marginLeft: 25
  },
  weatherContainer: {
    width: 288,
    height: 125,
    backgroundColor: "rgba(253,89,79,0.14)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.14)",
    borderRadius: 34,
    flexDirection: "row"
  },
  weatherIcon: {
    width: 100,
    height: 100
  },
  temperatureText: {
    fontFamily: "open-sans-300",
    color: "rgba(105,132,116,1)",
    fontSize: 20,
    marginLeft: 16,
    marginTop: 36
  },
  weatherText: {
    fontFamily: "roboto-700",
    color: "rgba(105,132,116,1)",
    fontSize: 25,
    marginLeft: 1,
    right: 54,
  },
  locationText: {
    fontFamily: "open-sans-bold",
    color: "rgba(105,132,116,1)",
    fontSize: 20,
    marginLeft: 42,
    marginTop: 72,
    right: 100
  },
  weatherIconRow: {
    height: 100,
    flexDirection: "row",
    flex: 1,
    marginRight: 100,
    marginLeft: 29,
    marginTop: 13
  },
  yourcurrentlocationText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -148,
    marginLeft: 37
  }
});

export default Index;

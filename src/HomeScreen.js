import React, { Component } from "react";
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import COLORS from './const/color';

function HomeScreen(props) {
  return (
    
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/home_BG-01.png")} style={styles.bGBottom}></ImageBackground>
      <Text style={styles.home}>Home</Text>
      <View style ={styles.topRow}>
        <View style={styles.weatherGroup}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Weather")}
            style={styles.weatherButton}
          >
            <Image
              source={require("../assets/images/cloud.png")}
              resizeMode="contain"
              style={styles.weatherIcon}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.weather}>Weather</Text>
        </View>
        <View style={styles.currencyGroup}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Currency")}
            style={styles.currencyButton}
          >
            <Image
              source={require("../assets/images/dollar.png")}
              resizeMode="contain"
              style={styles.currencyIcon}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.currencyCalculator}>Currency Calculator</Text>
        </View>
        </View>
      <View style={styles.bottomRow}>
      <View style={styles.contactsGroup}>
          <TouchableOpacity
             accessible={true}
             accessibilityLabel="Contacts"
             accessibilityHint="Navigates to list of emergency contacts."
             onPress={() => props.navigation.navigate("Contacts")}
            style={styles.contactsButton}
          >
            <Image
              source={require("../assets/images/phone-book.png")}
              resizeMode="contain"
              style={styles.contactsIcon}
            ></Image>
          </TouchableOpacity >
          <Text style={styles.emergencyContacts}>Emergency Contacts</Text>
        </View>
        <View style={styles.cueGroup}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Cue Card")}
            style={styles.cueButton}
          >
                                                                               {/* CUE CARD IMAGE */}
            <Image
              source={require("../assets/images/font.png")}
              resizeMode="contain"
              style={styles.cueIcon}
            ></Image>
          </TouchableOpacity>
                                                                               {/* CUE CARD TEXT */}
          <Text style={styles.cueCard}>Cue Card</Text>
        </View>
      </View>
       <View style={styles.bGBottomStack}>
       </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  home: {
    fontFamily: "open-sans-700",
    color: "#121212",
    fontSize: 30,
    paddingTop: 20,
    paddingLeft: 50
  },
  topRow: {
    flexDirection: "row",
    height: 170,
    justifyContent: 'center',
  },
  bottomRow: {
    flexDirection: "row",
    height: 170,
    justifyContent: 'center'
  },
  weatherGroup: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20
  },
  weatherButton: {
    width: 113,
    height: 113,
    backgroundColor: COLORS.white,
    borderColor: "#000000",
    borderRadius: 30,
  },
  weatherIcon: {
    width: 80,
    height: 80,
    marginTop: 18,
    marginLeft: 16,
  },
  weather: {
    fontFamily: "open-sans-600",
    color: "#121212",
    fontSize: 20,
    marginLeft: 27,
    marginTop: 10,
    fontWeight: 'bold'
  },
  currencyGroup: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20
  },
  currencyButton: {
    width: 113,
    height: 113,
    backgroundColor: COLORS.white,
    borderColor: "#000000",
    borderRadius: 30,
  },
  currencyIcon: {
    width: 80,
    height: 80,
    marginTop: 16,
    marginLeft: 16
  },
  currencyCalculator: {
    fontFamily: "open-sans-600",
    color: "#121212",
    textAlign: 'center',
    fontSize: 20,
    width: 78,
    marginLeft: 18,
    marginTop: 5,
    fontWeight: 'bold'
  },
  contactsGroup: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20
  },
  contactsButton: {
    width: 113,
    height: 113,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    borderColor: "#000000"
  },
  contactsIcon: {
    width: 80,
    height: 80,
    marginTop: 16,
    marginLeft: 16
  },
  emergencyContacts: {
    fontFamily: "open-sans-600",
    color: "#121212",
    fontSize: 20,
    textAlign: "center",
    width: 90,
    marginLeft: 18,
    marginTop: 5,
    fontWeight: 'bold'
  },
  cueGroup: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20
  },
  cueButton: {
    width: 113,
    height: 113,
    backgroundColor: COLORS.white,
    borderColor: "#000000",
    borderRadius: 30
  },
  cueIcon: {
    width: 80,
    height: 80,
    marginTop: 16,
    marginLeft: 16
  },
  cueCard: {
    fontFamily: "open-sans-600",
    color: "#121212",
    fontSize: 20,
    textAlign: "center",
    marginLeft: 3,
    marginTop: 10,
    fontWeight: 'bold'
  },
  bGBottom: {
    resizeMode: 'cover',
    position: 'absolute',
    width: 400,
    height: 220,
    marginTop: 382,
    marginLeft: 10,
  }
});

export default HomeScreen;

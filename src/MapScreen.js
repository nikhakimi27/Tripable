navigator.geolocation = require('@react-native-community/geolocation');
import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Image, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

function MapScreen({ route, navigation }) {
    const [error, setMyError] = useState("");
    const [latitude, setLatitude] = useState(3.123);
    const [longitude, setLongitude] = useState(101.453);
  
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
  
        var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        console.log('Android: ' + response);
  
        if (response === 'granted') {
          locateCurrentPosition();
        }
      }
    }
  
    const locateCurrentPosition = () => {
      Geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          console.log(latitude);
          setLongitude(position.coords.longitude);
          console.log(longitude);
          setMyError("")
        },
        error => setMyError(error.message),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
      )
    }
  
    return (
      <>
        <View style={styles.centerview}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{ 
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <MapView.Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude
              }}
              title={"You're here!"}
              description={latitude + ", " + longitude}
            />
          </MapView>
          <View style={styles.locatebutton}>
          <Button title="Locate Me!"onPress={() => requestLocationPermission()} />
          </View>
          <View />
      </View>
      </>
    )
  }

  const styles = StyleSheet.create({
    centerview: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fcf8f3'
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    locatebutton: {
      position: 'absolute',
      bottom:40,
      right:40,
  }
  });
  
  export default MapScreen;
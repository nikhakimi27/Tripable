import React from 'react';
import { Button, View, Text, StyleSheet, Image, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function SettingsScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  centerview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcf8f3'
  },
});

export default SettingsScreen;
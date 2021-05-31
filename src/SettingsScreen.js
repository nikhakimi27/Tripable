import React from 'react';
import { Button, View, Text, StyleSheet, Image, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';

function SettingsScreen({ route, navigation }) {
    return (
      <View style={styles.centerview}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')} />
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
  
  export default SettingsScreen;
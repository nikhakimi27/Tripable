import React from 'react';
import { Button, View, Text, StyleSheet, Image, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';

function DiscoverScreen({ route, navigation }) {

    //const { itemId } = route.params;        //in order for other screen to access this screen, they would need these 2 params
    //const { otherParam } = route.params;
  
    return (
      <View style={styles.centerview}>
        <Text>Discover!</Text>
        <Button title="Details" onPress={() => navigation.navigate('Details')} />
      </View>
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
  
  export default DiscoverScreen;
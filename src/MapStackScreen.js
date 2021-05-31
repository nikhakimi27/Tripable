import React from 'react';
import {Image} from 'react-native';

import MapScreen from './MapScreen';

import { createStackNavigator } from '@react-navigation/stack';

const MapStack = createStackNavigator();

function MapStackScreen() {
    return (
      <MapStack.Navigator>
        <MapStack.Screen name="Map" component={MapScreen}
          options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      </MapStack.Navigator>
    )
  }

  function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/images/tripable_logo-01.png')}
      />
    )
  }


  export default MapStackScreen;
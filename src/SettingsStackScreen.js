import React from 'react';

import {Image} from 'react-native';

import SettingsScreen from './SettingsScreen';

import { createStackNavigator } from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
    </SettingsStack.Navigator>
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


export default SettingsStackScreen;
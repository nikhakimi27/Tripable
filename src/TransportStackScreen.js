import React from 'react';
import {Image} from 'react-native';

import TransportScreen from './TransportScreen';
import TrainScreen from './HomeScreen';
import MonorailScreen from './CurrencyScreen';
import KelanajayaScreen from './ContactsScreen';
import SripetalingScreen from './CueScreen';
import AmpangScreen from './WeatherScreen';

import { createStackNavigator } from '@react-navigation/stack';

const TransportStack = createStackNavigator();

function TransportStackScreen() {
    return (
      <TransportStack.Navigator>
        <TransportStack.Screen name="Transport" component={TransportScreen}
          options={{ headerTitle: props => <LogoTitle {...props} /> }} />
          <TransportStack.Screen name="Train" component={TrainScreen} />
        <TransportStack.Screen name="Monorail" component={MonorailScreen} />
        <TransportStack.Screen name="Kelana Jaya" component={KelanajayaScreen} />
        <TransportStack.Screen name="Sri Petaling" component={SripetalingScreen} />
        <TransportStack.Screen name="Ampang" component={AmpangScreen} />
      </TransportStack.Navigator>
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


  export default TransportStackScreen;
import React from 'react';
import {Image} from 'react-native';

import HomeScreen from './HomeScreen';
import CurrencyScreen from './CurrencyScreen';
import ContactsScreen from './ContactsScreen';
import CueScreen from './CueScreen';
import WeatherScreen from './WeatherScreen';

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}
          options={{ headerTitle: props => <LogoTitle {...props} /> }} />
        <HomeStack.Screen name="Currency" component={CurrencyScreen} />
        <HomeStack.Screen name="Contacts" component={ContactsScreen} />
        <HomeStack.Screen name="Cue Card" component={CueScreen} />
        <HomeStack.Screen name="Weather" component={WeatherScreen} />
      </HomeStack.Navigator>
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


  
  export default HomeStackScreen;
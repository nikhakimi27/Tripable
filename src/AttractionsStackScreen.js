import React from 'react';

import AttractionsScreen from './AttractionsScreen';

import { createStackNavigator } from '@react-navigation/stack';

const AttractionsStack = createStackNavigator();

function AttractionsStackScreen() {
    return (
      <AttractionsStack.Navigator>
        <AttractionsStack.Screen name="Attractions" component={AttractionsScreen}/>
      </AttractionsStack.Navigator>
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


  export default AttractionsStackScreen;
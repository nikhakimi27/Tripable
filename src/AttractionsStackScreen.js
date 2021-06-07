import React from 'react';

import AttractionsScreen from './AttractionsScreen';
import DetailsScreen from './DetailsScreen';
import SearchScreen from './SearchScreen';
import DirectionScreen from './DirectionScreen';


import { createStackNavigator } from '@react-navigation/stack';
import tempMapScreen from './tempMapScreen';

const AttractionsStack = createStackNavigator();

function AttractionsStackScreen() {
    return (
      <AttractionsStack.Navigator>
        <AttractionsStack.Screen name="Attractions" component={AttractionsScreen}/>
        <AttractionsStack.Screen name="Details" component={DetailsScreen}/>
        <AttractionsStack.Screen name="Search" component={SearchScreen}/>
        <AttractionsStack.Screen name="Direction" component={DirectionScreen}/>
        <AttractionsStack.Screen name="tempMap" component={tempMapScreen}/>
        <AttractionsStack.Screen name="Suggestion" component={SuggestionScreen}/>

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
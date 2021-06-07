import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeStackScreen from './src/HomeStackScreen';
import AttractionsStackScreen from './src/AttractionsStackScreen';
import MapStackScreen from './src/MapStackScreen';
import SettingsStackScreen from './src/SettingsStackScreen';
import TransportStackScreen from './src/TransportStackScreen';
import COLORS from './src/const/color';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function BottomTabs({ navigation, route }) {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Map') {
          iconName = focused
            ? 'place'
            : 'place';
        }
        else if (route.name === 'Attractions') {
          iconName = focused
            ? 'explore'
            : 'explore';
        }
        else if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        }
        else if (route.name === 'Transport') {
          iconName = focused
            ? 'train'
            : 'train';
        }
        else if (route.name === 'Settings') {
          iconName = focused
            ? 'settings'
            : 'settings';
        }

        return <Icon name={iconName} size={size} color={color} />;
      }
    })}
      tabBarOptions={{
        activeTintColor: COLORS.tertiary,
        inactiveTintColor: COLORS.secondary,
      }}>
      <Tab.Screen name="Map" component={MapStackScreen}/>
      <Tab.Screen name="Attractions" component={AttractionsStackScreen} />
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Transport" component={TransportStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;

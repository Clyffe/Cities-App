/* eslint-disable prettier/prettier */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Cities from './Cities/Cities';
import City from './Cities/City';
import AddCity from './AddCity/AddCity';

import { colors } from './theme';


const CitiesNav = createStackNavigator({
    Cities: { screen: Cities },
    City: { screen: City },
  }, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
    },
});

const Tabs = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Cities" component={CitiesNav} />
      <Tabs.Screen name="Add City" component={AddCity} />
    </Tabs.Navigator>
  );
}
  export default MyTabs;

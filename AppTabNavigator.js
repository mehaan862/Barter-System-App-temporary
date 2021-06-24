import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ExchangeScreen from '../screens/ExchangeScreen';


export const AppTabNavigator = createBottomTabNavigator({
  DonateItems : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/574052-42518-0.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Items",
    }
  },
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Barter System.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Item Request",
    }
  }
});
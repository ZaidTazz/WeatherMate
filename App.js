import React, { Component } from 'react'

import CityWiseScreen from './Screens/CityWise';
import CurrentScreen from './Screens/Current';
import HourlyWise from './Screens/HourlyWise';
import CovidUpdate from './Screens/CovidUpdate';
import DailyWise from './Screens/DailyWise';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: '#48ACFF' }} activeColor="#fff" >

      {/* Home Button */}
      <Tab.Screen name="Current" component={CurrentScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={26}/>
        ),
    }}/>

      {/* Hourly Wise Button */}
      <Tab.Screen name="HourlyWise" component={HourlyWise}
      options={{
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer" color={color} size={26}/>
        ),
    }}/>

      {/* Daily Wise Button */}
      <Tab.Screen name="DailyWise" component={DailyWise}
      options={{
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={26}/>
        ),
    }}/>
    
      {/* City Search Button */}
      <Tab.Screen name="CityWise" component={CityWiseScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={26}/>
        ),
    }}/>

      {/* Covid Detail Button */}
      <Tab.Screen name="Covid" component={CovidUpdate}
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="virus" color={'red'} size={26}/>
        ),
    }}/>

    </Tab.Navigator>
    </NavigationContainer>
  );
}
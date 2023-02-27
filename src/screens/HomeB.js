import { StyleSheet, Text, View } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react'
import Volume from './Volume'
import Temperature from './Temperature';

const Tab = createMaterialTopTabNavigator();
const HomeB = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Mass" component={Volume} />
    <Tab.Screen name="Temperature" component={Temperature} />
  </Tab.Navigator>
  )
}

export default HomeB

const styles = StyleSheet.create({})

import {StyleSheet} from 'react-native';
import React from 'react';
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//import Volume from './src/screens/Volume';
import {NavigationContainer} from '@react-navigation/native';
//import Temperature from './src/screens/Temperature';
import { createStackNavigator } from '@react-navigation/stack';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import HomeB from './src/screens/HomeB';


const Stack = createStackNavigator();

//const Tab = createMaterialTopTabNavigator();

const App = () => {
  
    return (
      <NavigationContainer
      initialRouteName="Home">
      <Stack.Navigator >
        <Stack.Screen 
        name="Home" 
        component={Home}/>
        <Stack.Screen
        name="HomeB"
        component={HomeB}/>
      </Stack.Navigator>
      </NavigationContainer>
    
  );
};

export default App;

const styles = StyleSheet.create({});

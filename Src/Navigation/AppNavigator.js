import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Destination from './../Screen/Destination';
import SelectD from '../Screen/SelectD';
import Message from '../Screen/Message';
import HomeRecommmend from '../Screen/HomeRecommmend';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Destination" component={Destination} />
      <Stack.Screen name="SelectD" component={SelectD} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="HomeRecommmend" component={HomeRecommmend} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});

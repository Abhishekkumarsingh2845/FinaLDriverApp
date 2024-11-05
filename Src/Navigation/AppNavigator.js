import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './../Screen/Splash';
import Walkthough from './../Screen/Walkthough';

import Login from './../Screen/Login';
import Otp from './../Screen/Otp';
import Register from './../Screen/Register';
import OtpVerify from './../Screen/OtpVerify';
import Signup from './../Screen/Signup';
import Otpverifyemail from './../Screen/Otpverifyemail';
import Complete from './../Screen/Complete';
import BottomTab from './BottomTab';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
   
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="Walkthough" component={Walkthough} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="OtpVerify" component={OtpVerify} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Otpverifyemail" component={Otpverifyemail} />
          <Stack.Screen name="Complete" component={Complete} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});

// src/screens/WelcomeScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from './userSlice';

const WelcomeScreen = ({navigation}) => {
  const phone = useSelector(state => state.user.phone);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={{padding: 20}}>
      <Text>Welcome, your phone number is: {phone}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default WelcomeScreen;

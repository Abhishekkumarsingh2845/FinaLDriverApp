// src/screens/LoginScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../Test/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const storedPhone = await AsyncStorage.getItem('phone');

    if (storedPhone) {
      if (phone === storedPhone) {
        dispatch(login(phone));
        navigation.reset({
          index: 0,
          routes: [{name: 'Welcome'}],
        });
      } else {
        Alert.alert('Error', 'Phone number does not match.');
      }
    } else {
      Alert.alert(
        'Error',
        'Phone number not registered. Please register first.',
      );
    }
  };

  return (
    <View style={{padding: 20}}>
      <Text>Enter your Phone Number to Login:</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone Number"
        keyboardType="numeric"
        style={{borderWidth: 1, marginBottom: 20, padding: 10}}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default LoginScreen;

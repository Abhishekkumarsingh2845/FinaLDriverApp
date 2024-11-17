// src/screens/RegisterScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {register} from './userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleRegister = async () => {
    dispatch(register(phone));
    await AsyncStorage.setItem('phone', phone);
    navigation.navigate('Login');
  };

  return (
    <View style={{padding: 20}}>
      <Text>Enter your Phone Number:</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone Number"
        keyboardType="numeric"
        style={{borderWidth: 1, marginBottom: 20, padding: 10}}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;

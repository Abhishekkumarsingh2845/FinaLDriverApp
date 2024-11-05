import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Otpbox = ({marginVertical}) => {
  return (
    <View style={[styles.container, {marginVertical}]}>
      <TextInput style={styles.otpbox} inputMode="numeric" />
      <TextInput style={styles.otpbox} inputMode="numeric" />
      <TextInput style={styles.otpbox} inputMode="numeric" />
      <TextInput style={styles.otpbox} inputMode="numeric" />
      <TextInput style={styles.otpbox} inputMode="numeric" />
      <TextInput style={styles.otpbox} inputMode="numeric" />
    </View>
  );
};

export default Otpbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',

    width: '100%',
    // backgroundColor: 'red',
  },
  otpbox: {
    width: 50,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginRight: 7,
    borderColor: '#E4E9F2',
    borderWidth: 1,
    textAlign: 'center',
  },
});
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Secondary = ({title, marginTop}) => {
  return (
    <View style={[styles.contianer, {marginTop}]}>
      <TextInput
        placeholder={title}
        style={styles.txtinp}
        placeholderTextColor={'#B2B5C4'}
      />
    </View>
  );
};

export default Secondary;

const styles = StyleSheet.create({
  contianer: {
    width: '100%',
  },
  txtinp: {
    borderWidth: 1,
    borderColor: '#E4E9F2',
    marginHorizontal: 20,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter_18pt-Medium',
  },
});
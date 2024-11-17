import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const PrimaryInput = ({marginTop, marginVertical, placehld,val,chntxt,value,onChangeText}) => {
  return (
    <View style={[styles.conatainer, {marginTop, marginVertical}]}>
      <TextInput
        placeholder={placehld}
        style={styles.txtinput}
        placeholderTextColor={'#B2B5C4'}
        value={value}
        maxLength={10}
        onChangeText={onChangeText}
        keyboardType={'numeric'}
      />
    </View>
  );
};

export default PrimaryInput;

const styles = StyleSheet.create({
  conatainer: {
    width: '100%',
  },
  txtinput: {
    borderWidth: 0.6,
    backgroundColor: '#FFFFFF',
    borderColor: '#E4E9F2',
    borderRadius: 5,
    // marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter_18pt-Medium',
  },
});
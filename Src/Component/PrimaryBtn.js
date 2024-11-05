import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Color from './../Utlis/color';

const PrimaryBtn = ({title, marginTop, press}) => {
  return (
    <TouchableOpacity style={[styles.cotinaer, {marginTop}]} onPress={press}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
  cotinaer: {
    width: '100%',
    backgroundColor: Color.primary,
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  txt: {
    alignSelf: 'center',
    fontFamily: 'Inter_18pt-Medium',
    fontSize: 18,
    fontWeight: '500',
    color: Color.black,
  },
});
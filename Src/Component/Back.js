import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Back = ({marginTop}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.contianer, {marginTop}]}
      onPress={() => navigation.goBack()}>
      <Image
        source={require('./../Assets/Images/Path.png')}
        style={styles.img}
      />
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
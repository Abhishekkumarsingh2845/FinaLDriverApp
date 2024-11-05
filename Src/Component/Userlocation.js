import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Userlocation = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('./../Assets/Images/zz.png')} style={styles.img} />
    </TouchableOpacity>
  );
};

export default Userlocation;

const styles = StyleSheet.create({
  container: {
    top: 380,
    left: 320,
    zIndex: 1,
    width: 36,
    height: 35,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#000',
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

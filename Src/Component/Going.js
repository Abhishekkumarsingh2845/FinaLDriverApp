import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Going = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Destination')}>
      <Image
        source={require('././../Assets/Images/ss.png')}
        style={styles.img}
      />
      <Text style={styles.txt}>Where are you going?</Text>
    </TouchableOpacity>
  );
};

export default Going;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF1F7',
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 17,
    marginTop: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  img: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  txt: {
    fontSize: 17,
    fontWeight: '400',
    color: '#ACB1C0',
    marginLeft: 8,
  },
});

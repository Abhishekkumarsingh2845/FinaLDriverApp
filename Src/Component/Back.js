import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Back = ({marginTop, name}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, {marginTop}]}
      onPress={() => navigation.goBack()}>
      <Image
        source={require('./../Assets/Images/Path.png')}
        style={styles.img}
      />
      <View style={styles.textContainer}>
        <Text style={styles.txt}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  txt: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222E50',
  },
});

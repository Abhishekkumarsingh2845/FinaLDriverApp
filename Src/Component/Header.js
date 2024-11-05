import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title, marginTop}) => {
  return (
    <View style={[styles.container, {marginTop}]}>
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  txt: {
    color: '#222E50',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Inter_18pt-Medium',
  },
});
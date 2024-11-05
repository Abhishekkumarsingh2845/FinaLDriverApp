import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PopularPlaces = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./../Assets/Images/location.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.location}>
        <Text style={styles.railway}>Surat Railway Station</Text>
        <Text style={styles.road}>Rd road nearXYZ</Text>
      </View>
    </View>
  );
};

export default PopularPlaces;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 0.6,
    borderColor: '#E4E9F2',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  location: {
    marginLeft: 15,
  },
  road: {
    marginTop: 5,
    fontWeight: '300',
    fontSize: 12,
  },
  railway: {
    fontSize: 14,
    fontWeight: '600',
  },
});

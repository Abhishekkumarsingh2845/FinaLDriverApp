import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PopularPlaces = ({paddingHorizontal}) => {
  return (
    <TouchableOpacity style={[styles.container, {paddingHorizontal}]}>
      <View style={{  paddingHorizontal: 15,}}>
        <Image
          source={require('./../Assets/Images/location.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.location}>
        <Text style={styles.railway}>Surat Railway Station</Text>
        <Text style={styles.road}>Rd road nearXYZ</Text>
      </View>
    </TouchableOpacity>
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
    // paddingHorizontal: 15,
    paddingVertical: 15,
    // backgroundColor:"red",
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  
  location: {
    // marginLeft: 15,
    // paddingHorizontal: 15,

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

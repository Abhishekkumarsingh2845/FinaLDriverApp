import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Recommend = ({marginTop}) => {
  const [select, setselect] = useState(null);
  return (
    <View style={[styles.container, {marginTop}]}>
      <View style={styles.carcontainer}>
        <Image
          source={require('./../Assets/Images/Re.png')}
          style={styles.carimng}
        />
      </View>
      <TouchableOpacity
        style={[styles.secondcontainer, select === 'Hatchback' && styles.bg]}
        onPress={() => setselect('Hatchback')}>
        <View style={styles.cardetail}>
          <Text style={styles.carname}>Hatchback</Text>
          <Text>₹300-400</Text>
        </View>
        <Text style={styles.CC}>Comfy,Economical cars</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Recommend;

const styles = StyleSheet.create({
  carimng: {
    width: 65,
    height: 50,
    resizeMode: 'contain',
  },
  carcontainer: {
    borderWidth: 1,
    borderColor: '#E4E9F2',
    // width: 75,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardetail: {
    // paddingVertical:5,
    marginTop: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondcontainer: {
    marginLeft: 15,
    borderWidth: 1,
    flex: 1,
    borderColor: '#222E50',
    borderRadius: 10,
    justifyContent: 'center',
  },
  CC: {
    fontSize: 12,
    fontWeight: '300',
    marginVertical: 15,
    color: '#8E92A8',
    marginHorizontal: 8,
  },
  carname: {
    fontSize: 14,

    fontWeight: '600',
    color: '#222E50',
  },
  bg: {
    backgroundColor: '#E6EBFA',
    borderColor: '#222E50',
  },
});

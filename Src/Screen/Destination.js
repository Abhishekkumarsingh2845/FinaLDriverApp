import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Back from '../Component/Back';
import PopularPlaces from '../Component/PopularPlaces';

const Destination = ({navigation}) => {
  const [locations, setLocations] = useState([
    {
      id: Date.now(),
      placeholder: 'Pickup Location',
      imageSource: require('./../Assets/Images/dott.png'),
    },
  ]);

  const popularPlacesData = [
    {id: '1', name: 'Place 1'},
    {id: '2', name: 'Place 2'},
    {id: '3', name: 'Place 3'},
    {id: '4', name: 'Place 4'},
    {id: '5', name: 'Place 5'},
    {id: '6', name: 'Place 6'},
    {id: '7', name: 'Place 7'},
    {id: '8', name: 'Place 8'},
    {id: '9', name: 'Place 9'},
  ];

  const renderItem = ({item}) => <PopularPlaces placeName={item.name} />;

  const addLocation = () => {
    if (locations.length < 3) {
      setLocations([
        {
          id: Date.now(),
          placeholder: 'Pickup location',
          imageSource: require('./../Assets/Images/dott.png'),
        },
        ...locations,
      ]);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F4F3'}}>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 20}}>
          <Back name={'Destination'} />
        </View>

        <View style={styles.firstcontainer}>
          {locations.map((location, index) => (
            <View key={location.id}>
              <View style={styles.ccontainer}>
                <Image source={location.imageSource} style={styles.img} />
                <TextInput
                  placeholder={location.placeholder}
                  style={styles.txtint}
                  placeholderTextColor={'#000000'}
                />
              </View>

              {index < locations.length - 1 && <View style={styles.line} />}
            </View>
          ))}
          <TouchableOpacity
            style={styles.line}
            onPress={addLocation}
            disabled={locations.length >= 3}>
            <Image
              source={require('./../Assets/Images/addmore.png')}
              style={styles.imggg}
            />
          </TouchableOpacity>
          <View style={styles.ccontainer}>
            <Image
              source={require('././../Assets/Images/blackstore.png')}
              style={styles.img}
            />
            <TextInput
              placeholder="Drop location"
              style={styles.txtint}
              placeholderTextColor={'#000000'}
            />
            <Image
              source={require('././../Assets/Images/cut.png')}
              style={styles.img1}
            />
          </View>
        </View>
        <View style={styles.contian}>
          <Text style={styles.head}>Popular Places</Text>
          <View style={{marginTop: 15}}></View>
          <Button title="Next" onPress={() => navigation.navigate('HomeRecommmend')} />
          <FlatList
            data={popularPlacesData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Destination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1EF',
  },
  firstcontainer: {
    marginTop: 25,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginHorizontal: 20,
  },
  img: {
    width: 12,
    height: 12,
  },
  img1: {
    width: 12,
    height: 12,
    marginRight: 12,
  },
  txtint: {
    flex: 1,
    fontSize: 13,
    fontWeight: '400',
    paddingHorizontal: 15,
  },
  ccontainer: {
    paddingVertical: 20,

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#3A955E',
    height: 2,
  },
  imggg: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    top: -12,
    left: 280,
  },
  head: {
    marginHorizontal: 15,
    marginTop: 15,
    fontSize: 16,
    fontWeight: 600,
    color: '#222E50',
  },
  contian: {
    marginTop: 20,
    // paddingHorizontal: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#FFFFFF',
  },
});







import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import MapViewComponent from './../Component/map';
import Going from '../Component/Going';
import PopularPlaces from '../Component/PopularPlaces';
import Userlocation from '../Component/Userlocation';
import {useDispatch} from 'react-redux';
import {logout} from './../Redux/AuthRedux/userSlice';

const Home = ({navigation}) => {
  const [selected, setselected] = useState(null);
  const bottomSheetRef = useRef(null);
  const dispatch = useDispatch();

  const handleSheetChanges = useCallback(() => {
    console.log('handleSheetChanges');
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    console.log('Logged out');
    navigation.navigate('Splash');
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"}/>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <Image
            source={require('./../Assets/Images/threedot.png')}
            style={styles.threed}
          />
        </TouchableOpacity>

        <Image source={require('./../Assets/Images/dd.png')} style={styles.d} />
        <TextInput
          style={styles.searchBar}
          placeholder="Your Current Location"
          placeholderTextColor="#B2B5C4"
        />
        <Image
          source={require('./../Assets/Images/zoomin.png')}
          style={styles.zoo}
        />
      </View>
      <Userlocation />

      {/* <MapViewComponent /> */}
      <View style={StyleSheet.absoluteFill}>
        <MapViewComponent style={StyleSheet.absoluteFillObject} />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        index={0}
        enablePanDownToClose={true}
        snapPoints={['38.5%']}
        handleComponent={null}
        backgroundStyle={styles.bottomSheetBackground}>
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.booking}>
            <TouchableOpacity
              style={[
                styles.con1,
                selected === 'Book Now' && styles.selectedarea,
              ]}
              onPress={() => setselected('Book Now')}>
              <Image
                source={require('./../Assets/Images/car.png')}
                style={styles.carimg}
              />
              <Text style={styles.txt}>Book Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.con1,
                selected === 'Outstation' && styles.selectedarea,
              ]}
              onPress={() => setselected('Outstation')}>
              <Image
                source={require('./../Assets/Images/car.png')}
                style={styles.carimg}
              />
              <Text style={styles.txt}>Outstation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.con1,
                selected === 'Book Later' && styles.selectedarea,
              ]}
              onPress={() => setselected('Book Later')}>
              <Image
                source={require('./../Assets/Images/car.png')}
                style={styles.carimg}
              />
              <Text style={styles.txt}>Book Later</Text>
            </TouchableOpacity>
          </View>
          <Going />
          <PopularPlaces paddingHorizontal={15} />
          <PopularPlaces paddingHorizontal={15} />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  searchContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    zIndex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    // backgroundColor:"red",
  },
  selectedarea: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"#ffff",
  },
  bottomSheetBackground: {
    borderRadius: 0,
  },
  booking: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  carimg: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
  con1: {
    alignItems: 'center',
    paddingBottom: 5,
  },
  txt: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
  },
  threed: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  d: {
    width: 12,
    height: 8,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  zoo: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Home;

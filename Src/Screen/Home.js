// import React, {useCallback, useRef} from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
// import MapViewComponent from './../Component/map';
// import Going from '../Component/Going';
// import PopularPlaces from '../Component/PopularPlaces';
// import Userlocation from '../Component/Userlocation';

// const Home = () => {
//   const bottomSheetRef = useRef(null);

//   const handleSheetChanges = useCallback(() => {
//     console.log('handleSheetChanges');
//   }, []);

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <MapViewComponent />

//       <BottomSheet
//         ref={bottomSheetRef}
//         onChange={handleSheetChanges}
//         index={0}
//         enablePanDownToClose={true}
//         snapPoints={['38.5%']}
//         handleComponent={null}
//         backgroundStyle={styles.bottomSheetBackground}>
//         <BottomSheetView style={styles.contentContainer}>
//           <View style={styles.booking}>
//             <TouchableOpacity style={styles.con1}>
//               <Image
//                 source={require('./../Assets/Images/car.png')}
//                 style={styles.carimg}
//               />
//               <Text style={styles.txt}>Book Now</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.con1}>
//               <Image
//                 source={require('./../Assets/Images/car.png')}
//                 style={styles.carimg}
//               />
//               <Text style={styles.txt}>Outstation</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.con1}>
//               <Image
//                 source={require('./../Assets/Images/car.png')}
//                 style={styles.carimg}
//               />
//               <Text style={styles.txt}>Book Later</Text>
//             </TouchableOpacity>
//           </View>
//           <Going />
//           <PopularPlaces />
//           <PopularPlaces />
//         </BottomSheetView>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   bottomSheetBackground: {
//     borderRadius: 0,
//   },
//   booking: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     paddingVertical: 10,
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,
//   },
//   carimg: {
//     width: 70,
//     height: 50,
//     resizeMode: 'contain',
//   },
//   con1: {
//     alignItems: 'center',
//   },
//   txt: {
//     fontSize: 14,
//     fontWeight: '400',
//     fontFamily: 'Inter_18pt-Medium',
//   },
// });

// export default Home;

import React, {useCallback, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import MapViewComponent from './../Component/map';
import Going from '../Component/Going';
import PopularPlaces from '../Component/PopularPlaces';
import Userlocation from '../Component/Userlocation';

const Home = () => {
  const bottomSheetRef = useRef(null);

  const handleSheetChanges = useCallback(() => {
    console.log('handleSheetChanges');
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          source={require('./../Assets/Images/threedot.png')}
          style={styles.threed}
        />
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
      <MapViewComponent />

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
            <TouchableOpacity style={styles.con1}>
              <Image
                source={require('./../Assets/Images/car.png')}
                style={styles.carimg}
              />
              <Text style={styles.txt}>Book Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.con1}>
              <Image
                source={require('./../Assets/Images/car.png')}
                style={styles.carimg}
              />
              <Text style={styles.txt}>Outstation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.con1}>
              <Image
                source={require('./../Assets/Images/car.png')}
                style={styles.carimg}
              />
              <Text style={styles.txt}>Book Later</Text>
            </TouchableOpacity>
          </View>
          <Going />
          <PopularPlaces />
          <PopularPlaces />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottomSheetBackground: {
    borderRadius: 0,
  },
  booking: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
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

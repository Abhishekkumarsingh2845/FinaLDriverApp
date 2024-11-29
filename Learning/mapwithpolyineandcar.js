import React, {useEffect, useState, useRef} from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';

const MapViewComponent = () => {
  const mapRef = useRef(null);

  const [region, setRegion] = useState({
    latitude: 28.62690181633405,
    longitude: 77.37747715122136,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });

  const initialRegion = {
    latitude: 28.62690181633405,
    longitude: 77.37747715122136,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Permission',
            message:
              'This app needs access to your location to show your current position on the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied');
        }
      }
    };

    requestLocationPermission();
  }, []);

  const resetPosition = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(initialRegion, 1000);
    }
  };

  const origin = {latitude: 28.62690181633405, longitude: 77.37747715122136};
  const destination = {
    latitude: 28.64090181633405,
    longitude: 77.37547715122136,
  };
  const GOOGLE_MAPS_APIKEY = '';
  console.log('->>>>', GOOGLE_MAPS_APIKEY);

  return (
    <View style={styles.container}>
      <MapView
        provider={'google'}
        mapType={'standard'}
        style={styles.map}
        region={region}
        showsUserLocation={true}
        ref={mapRef}>
        <Marker
          coordinate={{
            latitude: 28.62690181633405,
            longitude: 77.37747715122136,
          }}
          title="Marker 1"
          description="This is the first marker"
          image={require('./../Assets/Images/ping.png')}
          style={{width: 60, height: 60}}
        />

        <Marker
          coordinate={{
            latitude: 28.627972,
            longitude: 77.376587,
          }}
          title="Marker 2"
          description="This is the second marker"
          image={require('./../Assets/Images/rac.png')}
          style={{width: 60, height: 60}}
        />

        <Marker
          coordinate={{
            latitude: 28.626832,
            longitude: 77.376877,
          }}
          title="Marker 3"
          description="This is the third marker"
          image={require('./../Assets/Images/rac.png')}
          style={{width: 60, height: 60}}
        />
        <Marker
          coordinate={{
            latitude: 28.626738,
            longitude: 77.3784,
          }}
          title="Marker 3"
          description="This is the third marker"
          image={require('./../Assets/Images/rac.png')}
          style={{width: 60, height: 60}}
        />

        <MapViewDirection
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>

      <TouchableOpacity style={styles.containe} onPress={resetPosition}>
        <Image
          source={require('./../Assets/Images/zz.png')}
          style={styles.img}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  containe: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 350,
    right: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default MapViewComponent;

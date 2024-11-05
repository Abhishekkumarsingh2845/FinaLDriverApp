import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Splash = ({navigation}) => {
  useEffect(() => {
    const rr = setTimeout(() => {
      navigation.navigate('Walkthough');
    }, 2000);
    return () => clearTimeout(rr);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require('./../Assets/Images/Group.png')}
          style={styles.imagee}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagee: {
    width: 150,
    resizeMode: 'contain',
  },
});

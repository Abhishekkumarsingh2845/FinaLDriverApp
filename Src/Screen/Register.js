import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Component/Header';
import Back from '../Component/Back';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryInput from '../Component/PrimaryInput';
import PrimaryBtn from '../Component/PrimaryBtn';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={"#F4F4F3"} />
        <Back />
        <Header title={'Enter Your Mobile No.'} marginTop={20} />
        <PrimaryInput marginVertical={30} placehld={'Enter Mobile No'} />
        <PrimaryBtn
          title={'Submit'}
          press={() => navigation.navigate('OtpVerify')}
        />

        <Text style={styles.txt}>
          By regestering, you are agreeing to Mobox’s
        </Text>
        <Text style={styles.txt1}>
          <Text style={{color: 'black'}}>Terms & Conditions</Text> and{' '}
          <Text style={{color: 'black'}}>Privacy and Polcies</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F4F4F3',
  },
  txt: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
    color: Colors.grey,
  },
  txt1: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
    color: Colors.grey,
  },
});

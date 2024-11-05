import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Color from '../Utlis/color';
import PrimaryInput from '../Component/PrimaryInput';
import PrimaryBtn from '../Component/PrimaryBtn';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F4F4F3'} barStyle={'dark-content'} />
      <View style={{marginTop: 180}}>
        <Text style={styles.maintxt}>Hi, Welcome to Taxi App</Text>
      </View>

      <Text style={styles.subtxt}>Enter your Mobile Number to login.</Text>
      <PrimaryInput marginTop={30} placehld={'Mobile Number'} />
      <PrimaryBtn
        marginTop={30}
        title={'Login'}
        press={() => navigation.navigate('Otp')}
      />
      <TouchableOpacity>
        <Text style={styles.clickingstr}>
          By clicking start, you agree to our
        </Text>
        <Text style={styles.termscondition}>Terms and Conditions </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.account}>
          Don’t have an account?<Text style={styles.signup}> Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundclr,
    paddingHorizontal: 20,
  },
  maintxt: {
    // marginTop: 180,
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Inter_18pt-Medium',
    color: Color.black,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  subtxt: {
    marginTop: 10,
    fontFamily: 'Inter_18pt-Medium',
    fontSize: 14,
    fontWeight: '400',
    color: Color.grey,
    textAlign: 'center',
  },
  clickingstr: {
    marginTop: 40,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
    color: Color.grey,
    textAlign: 'center',
  },
  termscondition: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Inter_18pt-Medium',
    color: Color.black,
    textAlign: 'center',
  },
  account: {
    marginTop: 280,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
    color: Color.grey,
    textAlign: 'center',
  },
  signup: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
    color: Color.black,
    textAlign: 'center',
  },
});

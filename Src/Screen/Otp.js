import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Component/Header';
import Otpbox from '../Component/Otpbox';
import PrimaryBtn from '../Component/PrimaryBtn';
import Color from '../Utlis/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import Back from '../Component/Back';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setToken} from '../Redux/AuthRedux/userSlice';
import {postData} from '../Api/Api';
const Otp = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [loading, setloding] = useState(false);
  const rettoknn = useSelector(state => state.auth.token);

  const {otp, phone} = route.params;

  const [enterOtp, setEnterOtp] = useState(['', '', '', '', '', '']);

  const otpr = async () => {
    try {
      setloding(true);
      const enteredOtp = enterOtp.join('');
      const response = await postData('/auth/loginOtpVerify', {
        phone: phone,
        phoneCode: '91',
        otp: enteredOtp,
      });

      const {code, status, message, data} = response;
      console.log('API Response:->>>>>>>>>>', response.data);

      if (code === 200 && status) {
        console.log('OTP verification successful:', data.token);
        dispatch(setToken(data.token));
        if (rettoknn || data.token) {
          console.log('qqqqq->>>>>', rettoknn || data.token);
          navigation.navigate('Register');
        } else {
          navigation.navigate('Signup');
        }
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      Toast.show({
        type: 'error',
        text1: 'Invliad Otp',
        text2: 'Your Otp is Incorrect',
        position: 'top,',
      });
    } finally {
      setloding(false);
    }
  };

  const verify = () => {
    const enteredOtp = enterOtp.join('');
    if (enteredOtp.length === 6) {
      otpr();
    } else {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Invalid OTP',
        text2: 'Please enter the 6-digit OTP.',
        visibilityTime: 3000,
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F4F3'}}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <Back />
        <Header title={'OTP Verification'} marginTop={30} />
        <Text style={styles.txt}>We have sent you a 6 digit verification</Text>
        <Text style={styles.txt1}>
          code on <Text style={styles.no}>+91 {phone}</Text>
        </Text>
        <Otpbox otp={enterOtp} setOtp={setEnterOtp} marginVertical={20} />
        <PrimaryBtn title={'Verify'} press={verify} />
        {loading && (
          <ActivityIndicator
            size="large"
            color={Color.primary}
            style={styles.loader}
          />
        )}
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.chngeno}>Change my mobile number</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={ref => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txt: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '400',
  },
  txt1: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '400',
  },
  chngeno: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
  },
  no: {
    fontSize: 14,
    fontWeight: '500',
    color: Color.black,
    fontFamily: 'Inter_18pt-Medium',
  },
});

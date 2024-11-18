import {ActivityIndicator, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../Component/Header';
import Back from '../Component/Back';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryInput from '../Component/PrimaryInput';
import PrimaryBtn from '../Component/PrimaryBtn';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {setPhn} from '../Redux/AuthRedux/userSlice';
import Color from '../Utlis/color';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setloding] = useState(false);
  const qq = useSelector(state => state.auth.token);
  const [phone, setphone] = useState('');

  const reg = async () => {
    if (phone.length !== 10) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Phone Number',
        text2: 'Please enter a valid 10-digit phone number.',
        position: 'top',
      });
      return;
    }
    setloding(true);
    try {
      dispatch(setPhn(phone));

      const response = await axios.post(
        'http://15.206.16.230:5010/api/v1/customer/auth/phoneOtpSend',
        {
          phone: phone,
          phoneCode: '91',
        },
      );
      const {code, status, message, data} = response.data;
      if (code === 200 && status) {
        navigation.navigate('OtpVerify', {otp: data.otp});
        console.log('otp', data.otp);
      } else {
        console.log('message', message);
      }
    } catch (error) {
      console.log('Api', error);
    }
    finally {
      setloding(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#F4F4F3'} />
        <Back />
        <Header title={'Enter Your Mobile No.'} marginTop={20} />
        <PrimaryInput
          marginVertical={30}
          placehld={'Enter Mobile No'}
          value={phone}
          onChangeText={setphone}
        />
        <PrimaryBtn title={'Submit'} press={reg} />
        {loading && ( // Show loader if loading is true
        <ActivityIndicator
          size="large"
          color={Color.primary}
          style={styles.loader}
        />
      )}
        <Text style={styles.txt}>
          By registering, you are agreeing to Mobox’s
        </Text>
        <Text style={styles.txt1}>
          <Text style={{color: 'black'}}>Terms & Conditions</Text> and{' '}
          <Text style={{color: 'black'}}>Privacy and Policies</Text>
        </Text>{' '}
        <Toast ref={ref => Toast.setRef(ref)} />
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

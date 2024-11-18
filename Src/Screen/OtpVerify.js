import {
  ActivityIndicator,
  Alert,
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
import Back from '../Component/Back';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const OtpVerify = ({navigation, route}) => {
  const {otp} = route.params;
  const [loading, setloding] = useState(false);
  const [enterotp, setenterotp] = useState(['', '', '', '', '', '']);

  const token = useSelector(state => state.auth.token);
  console.log('tokenn herhdskjzgczhkdcgyjgayegyafgyutyufye->>>', token);

  const vfy = () => {
    setloding(true);
    const finalotp = enterotp.join('');
    if (finalotp == String(otp)) {
      if (token == String(null)) {
        navigation.navigate('Signup');
        console.log('Navigating to Signup');
      } else {
        navigation.navigate('BottomTab');
        console.log('Navigating to BottomTab');
      }
    } else {
      Alert.alert('Invalid OTP', 'The entered OTP is incorrect.');
    }
    setloding(false);
  };

  return (
    <SafeAreaView style={{flex: 1}} edges={['top']}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#F4F4F3'} />
        <Back />
        <Header title={'OTP Verification'} marginTop={30} />
        <Text style={styles.txt}>
          We have sent you a 6-digit verification code
        </Text>
        <Text style={styles.txt1}>
          code on <Text style={styles.no}>+91 6556565656</Text>
        </Text>
        <Otpbox marginVertical={20} otp={enterotp} setOtp={setenterotp} />
        <PrimaryBtn title={'Verify'} press={vfy} />

        {loading && ( // Show loader if loading is true
          <ActivityIndicator
            size="large"
            color={Color.primary}
            style={styles.loader}
          />
        )}
        <TouchableOpacity style={{marginTop: 30}}>
          <Text style={styles.chngeno}>Change my mobile number</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerify;

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

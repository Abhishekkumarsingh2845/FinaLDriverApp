import {
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

const Otpverifyemail = ({navigation, route}) => {
  const [enterotp, setenterotp] = useState(['', '', '', '', '', '']);
  const {email} = route.params;
  const emailotpverify = () => {
    const finalotp = enterotp.join('');
    if (email == finalotp) {
      navigation.navigate('Complete');
    } else {
      Alert.alert('Invalid otp');
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#F4F4F3'} />
        <Back />
        <Header title={'OTP Verification'} marginTop={30} />
        <Text style={styles.txt}>
          We have sent you aaa 6 digit verification
        </Text>
        <Text style={styles.txt1}>
          code on <Text style={styles.no}>test@yourmail.com</Text>
        </Text>
        <Otpbox otp={enterotp} setOtp={setenterotp} marginVertical={20} />
        <PrimaryBtn title={'Verify'} press={() => emailotpverify()} />
        <TouchableOpacity style={{marginTop: 30}}>
          <Text style={styles.chngeno}>Change my email ID</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Otpverifyemail;

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

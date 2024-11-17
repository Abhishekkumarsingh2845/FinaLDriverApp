import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import PrimaryBtn from '../Component/PrimaryBtn';
import Back from '../Component/Back';
import Header from '../Component/Header';
import PrimaryInput from '../Component/PrimaryInput';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setToken} from '../Redux/AuthRedux/userSlice';

const Signup = ({navigation}) => {
  const finalphone = useSelector(state => state.auth.phoneNumber);
  console.log('phonenonnnncbdbfhjfghjfgdjzhgfdhj->>>', finalphone);
  console.log(finalphone);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');

  const rg = async () => {
    try {
      const payload = {
        fullName: name || 'John Doe',
        phone: finalphone,
        email: email,
        phoneCode: '91',
        profileImage: 'http://example.com/path/to/profile.jpg',
        gender: 'MALE',
        dob: {
          day: day.toString() || '01',
          month: month.toString() || '01',
          year: year.toString() || '1990',
        },
        userType: 'CUSTOMER',
      };

      const response = await axios.post(
        'http://15.206.16.230:5010/api/v1/customer/signUp',
        payload,
      );

      console.log('->>>>', response);
      const {code, status, message, data} = response.data;

      if (code == 200 && status) {
        console.log('email response', data.token);
        await AsyncStorage.setItem('TOKENN', data.token);
        const ttt = await AsyncStorage.getItem('TOKENN');

        console.log('topkecccccccccccccccccccccccn->>>>>>>', ttt);
        dispatch(setToken(ttt));
        await AsyncStorage.setItem('maintoken');
        navigation.navigate('Otpverifyemail', {email: data.token});
      } else {
        console.log('Error:', message);
      }
    } catch (error) {
      console.log(
        'Error during API call',
        error?.response?.data || error.message,
      );
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#F4F4F3'} barStyle={'dark-content'} />
        <Back />
        <Header title={'Enter Your Name'} marginTop={30} />
        <Text style={styles.completename}>
          Please provide your complete name
        </Text>

        <PrimaryInput
          placehld={'Full Name'}
          value={name}
          onChangeText={setName}
          marginTop={35}
        />

        <View style={styles.datecontainer}>
          <TextInput
            value={day}
            onChangeText={setDay}
            style={styles.day}
            placeholder="Day"
            placeholderTextColor={'#B2B5C4'}
          />
          <TextInput
            style={styles.month}
            value={month}
            onChangeText={setMonth}
            placeholder="Month"
            placeholderTextColor={'#B2B5C4'}
          />
          <TextInput
            style={styles.year}
            value={year}
            onChangeText={setYear}
            placeholder="Year"
            placeholderTextColor={'#B2B5C4'}
          />
        </View>

        <PrimaryInput
          placehld={'Enter Email(Optional)'}
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.gender}>
          <TouchableOpacity
            style={styles.innerc}
            onPress={() => setGender('MALE')}>
            <View
              style={[
                styles.outercircle,
                gender === 'MALE' && {borderColor: '#FFC432'},
              ]}
            />
            <Text style={styles.male}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.outerrcircle}
            onPress={() => setGender('FEMALE')}>
            <View
              style={[
                styles.innercircle,
                gender === 'FEMALE' && {backgroundColor: '#FFC432'},
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.female}>Female</Text>
        </View>

        <PrimaryBtn press={rg} marginTop={180} title={'Next'} />
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  datecontainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 15,
  },
  day: {
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    flex: 1,
    borderColor: '#E4E9F2',
    borderWidth: 0.6,
    fontSize: 14,
    color: 'red',
    borderRadius: 6,
  },
  month: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 7,
    textAlign: 'center',
    borderColor: '#E4E9F2',
    borderWidth: 0.6,
    borderRadius: 6,
    flex: 1,
    paddingVertical: 8,
  },
  year: {
    backgroundColor: '#FFFFFF',
    flex: 2,
    borderRadius: 6,
    textAlign: 'center',
    borderColor: '#E4E9F2',
    borderWidth: 0.6,
  },
  outercircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#C8C7CC',
    alignItems: 'center',
  },
  outerrcircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#FFC432',
    alignItems: 'center',
  },
  innercircle: {
    width: 12,
    height: 12,
    borderRadius: 5,
    backgroundColor: '#FFC432',
  },
  gender: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
  },
  male: {
    marginLeft: 5,
  },
  female: {
    marginLeft: 5,
  },
  innerc: {
    flexDirection: 'row',
    marginRight: 35,
  },
  completename: {
    marginTop: 3,
  },
});

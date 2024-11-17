
import {StyleSheet, TextInput, View} from 'react-native';
import React, {useRef} from 'react';

const Otpbox = ({marginVertical, otp, setOtp}) => {
  // Create an array of refs for each OTP input
  const inputRefs = useRef([]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus on the next input box if current one is filled
    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event, index) => {
    // If the user presses backspace and the current input is empty, move focus to the previous input
    if (event.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={[styles.container, {marginVertical}]}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.otpbox}
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChangeText={text => handleOtpChange(text, index)}
          ref={el => (inputRefs.current[index] = el)} // Assign ref to each input
          onKeyPress={event => handleKeyPress(event, index)} // Handle backspace key press
        />
      ))}
    </View>
  );
};

export default Otpbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  otpbox: {
    width: 50,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginRight: 7,
    borderColor: '#E4E9F2',
    borderWidth: 1,
    textAlign: 'center',
  },
});

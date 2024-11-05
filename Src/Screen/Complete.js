import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  
  const Complete = ({navigation}) => {
    return (
      <ImageBackground
        source={require('./../Assets/Images/registration-complete.png')}
        style={styles.container}>
        <StatusBar backgroundColor={'#222E50'} barStyle={'light-content'} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('BottomTab')}>
          <Text style={styles.txt}>Go to Home</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };
  
  export default Complete;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      // width: '100%',
      paddingHorizontal: 20,
    },
    btn: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      paddingVertical: 14,
      borderRadius: 10,
      marginBottom: 30,
    },
    txt: {
      textAlign: 'center',
      color: '#222E50',
      fontSize: 18,
      fontWeight: '500',
      fontFamily: 'Inter_18pt-Medium',
    },
  });
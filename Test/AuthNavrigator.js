// // App.js
// import React, { useEffect } from 'react';
// import { Provider, useDispatch } from 'react-redux';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { login } from './userSlice';
// import RegisterScreen from './Register';
// import LoginScreen from './Login';
// import WelcomeScreen from './HomeScreen';
// import store from './store';

// const Stack = createStackNavigator();

// const AppN = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const checkUser = async () => {
//       const phone = await AsyncStorage.getItem('phone');
//       if (phone) {
//         dispatch(login(phone)); 
//       }
//     };

//     checkUser();
//   }, [dispatch]);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Register">
//         <Stack.Screen name="Register" component={RegisterScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };



export default AppN;

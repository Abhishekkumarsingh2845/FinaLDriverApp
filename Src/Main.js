// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import BottomTab from './Navigation/BottomTab';
// import AppNavigator from './Navigation/AppNavigator';
// import AuthNavigator from './Navigation/AuthNavigator';
// import {useSelector} from 'react-redux';
// import Splash from './Screen/Splash';

// const Stack = createNativeStackNavigator();

// const Main = () => {
//   const tt = useSelector(state => state.auth.token);
//   console.log('tt', tt);

//   return (
//     // <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false,
//           }}>
//             <Stack.Screen name="splash" component={Splash}/>
//           {/* <Stack.Screen name="AuthNavigator" component={AuthNavigator} /> */}
//           {/* <Stack.Screen name="AppNavigator" component={AppNavigator} />
//           <Stack.Screen name="BottomTab" component={BottomTab} /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     // </SafeAreaProvider>
//   );
// };

// export default Main;

// const styles = StyleSheet.create({});











































import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './Navigation/BottomTab';
import Splash from './Screen/Splash';
import AppNavigator from './Navigation/AppNavigator';
import AuthNavigator from './Navigation/AuthNavigator';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
           
     <Stack.Screen name="AuthNavigator" component={AuthNavigator} /> 
        <Stack.Screen name="AppNavigator" component={AppNavigator} /> 
      <Stack.Screen name="BottomTab" component={BottomTab} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});

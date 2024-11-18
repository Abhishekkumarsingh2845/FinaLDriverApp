// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import BottomTab from './Src/Navigation/BottomTab';
// import AppNavigator from './Src/Navigation/AppNavigator';
// import AuthNavigator from './Src/Navigation/AuthNavigator';
// import {Provider, useSelector} from 'react-redux';
// import Main from './Src/Main';
// import {store} from './Src/Redux/AuthRedux/store';


// const Stack = createNativeStackNavigator();


// const App = () => {
//   store.getState().user;

//   return (
//     <Provider store={store}>
//       <Main />
//     </Provider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './Src/Redux/AuthRedux/store'; 
import Login from './Src/Screen/Login';  
import Otp from './Src/Screen/Otp';
import Signup from './Src/Screen/Signup';

const Stack = createStackNavigator();


const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
              name="Login" 
              component={Login} 
              options={{ headerShown: false }}  
            />
            <Stack.Screen 
              name="Otp" 
              component={Otp} 
              options={{ headerShown: false }}  
            />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
























// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// import {Provider} from 'react-redux';
// import {store} from './Src/Redux/AuthRedux/store';
// import Login from './Src/Screen/Login'; // Assuming your Login component is in Screens/Login.js

// const Stack = createStackNavigator();
// const queryClient = new QueryClient();

// const App = () => {
//   return (
//     <Provider store={store}>
//       <QueryClientProvider client={queryClient}>
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Login">
//             <Stack.Screen
//               name="Login"
//               component={Login}
//               options={{headerShown: false}}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </QueryClientProvider>
//     </Provider>
//   );
// };

// export default App;

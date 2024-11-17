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
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Src/Redux/AuthRedux/store';
import Main from './Src/Main';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

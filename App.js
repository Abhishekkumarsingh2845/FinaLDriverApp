// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {Provider, useSelector} from 'react-redux';
// import Main from './Src/Main';
// import {store} from './Src/Redux/AuthRedux/store';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Src/Redux/AuthRedux/store';
import Main from './Src/Main';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

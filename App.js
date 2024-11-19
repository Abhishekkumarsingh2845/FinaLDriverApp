import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import Main from './Src/Main';
import {store} from './Src/Redux/AuthRedux/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  store.getState().user;

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});















































































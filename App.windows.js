/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import store from './store/store';
import {Provider} from 'react-redux';
import Custom from './components/custom';
import UserInput from './components/userInput';

class DataVisualization extends Component {
  render() {
    return (<Provider store={store}>
      <View >
        <Custom></Custom>
        <UserInput></UserInput>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('DataVisualization', () => DataVisualization);
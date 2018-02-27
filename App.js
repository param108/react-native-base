import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { List } from './components';
import {Provider} from 'react-redux';
import store from './store';
export default class App extends React.Component {

  constructor() {
    super();
  }
  
  render() {  
    return (
	<Provider store={store}>
	<List/>
	</Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

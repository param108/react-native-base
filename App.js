import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { List } from './components';
import {Provider} from 'react-redux';
import {store} from './store';
import * as firebase from 'firebase';

export default class App extends React.Component {

  constructor() {
    super();
  }
  
  render() {  
    return (
	<Provider store={store}>
	<View style={styles.container}>
	<List/>
	</View>
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

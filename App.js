import React from 'react';
import { Login, Wait } from './components';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import {store} from './store';
import * as firebase from './firebase';

export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
	          <Provider store={store}>
            <View style={{flex:1}}>
	          <Login/>
            <Wait/>
            </View>
	          </Provider>
    );
  }
}



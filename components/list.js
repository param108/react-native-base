import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

class List extends React.Component {

  constructor() {
    super();
    this.state={
      count: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    let {count} = nextProps;
    
    this.setState({ count: count });
  }
  
  render() {
    return (
	<View>
	<Text>Hello I am {this.state.count}</Text>
	<Button title="Increment" onPress={this.props.increment} />
	</View>
    );
  }
}


function select(state) {
  return {
    count: state.increment.count
  };
}

function actions(dispatch) {
  return {
    increment: ()=> { dispatch({type:"INCREMENT", payload:1})}
  };
}

//module.exports=connect(select,actions)(List);
module.exports={List: connect(select,actions)(List)};

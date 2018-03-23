import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

class Login extends React.Component {

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
	              <Button title="Login" onPress={this.start_login} />
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

module.exports={Login: connect(select,actions)(Login)};

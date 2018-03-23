import React from 'react';
import { TextInput, Timers, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import  firebase  from '../firebase';

class Login extends React.Component {
   
    constructor() {
        super();
        this.state={
            count: 0,
            username: '',
            password: ''
        };
        this.startLogin = this.startLogin.bind(this);
        this.startSignUp = this.startSignUp.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        let {count} = nextProps;
        this.setState({ count: count });
    }

    startLogin() {
        this.props.login(this.state.username, this.state.password);
    }

    startSignUp() {
        this.props.signup(this.state.username, this.state.password);
    }

    render() {
        return (
                <View style={styles.login_screen}>
	              <View style={styles.login_page}>
                <TextInput style={styles.textInput} value={this.state.username} onChangeText={(text) => this.setState({username: text})} placeholder={'Username'}/>
                <TextInput style={styles.textInput} value={this.state.password} onChangeText={(text) => this.setState({password: text})} placeholder={'Password'} />
                <View style={{marginBottom: 10}}>
	              <Button title="Login" onPress={this.startLogin} />
                </View>
                <View>
                <Button title="Sign Up" onPress={this.startSignUp} />
                </View>
	              </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    login_page: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    login_screen: {
        bottom: 0,
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },
    textInput: {
        marginBottom: 10,
        paddingBottom: 5,
        paddingLeft:5
    }
});

function select(state) {
    return {
        count: state.increment.count
    };
}

function actions(dispatch) {
    return {
        show_wait: ()=> { dispatch({type:"SHOW_WAIT"});},
        hide_wait: ()=> { dispatch({type:"HIDE_WAIT"});},
        login: (username, password) => {dispatch({type:"LOGIN", username, password});},
        signup: (username, password) => {dispatch({type:"SIGNUP", username, password});}
    };
}

module.exports={Login: connect(select,actions)(Login)};

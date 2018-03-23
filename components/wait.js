import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

class Wait extends React.Component {

    constructor() {
        super();
        this.state={
            visible: false
        };
    }

    componentWillReceiveProps(nextProps) {
        let {visible} = nextProps;
        this.setState({ visible: visible });
    }

    render() {

        if (this.state.visible) {
            return (
                	  <View style={styles.wait_screen}>
	                  <Text>Waiting...</Text>
	                  </View>
            );
        } else {
            return null;
        };
    }
}

const styles = StyleSheet.create({
    wait_screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});


function select(state) {
    return {
        visible: state.wait.visible
    };
}

module.exports={Wait: connect(select)(Wait)};

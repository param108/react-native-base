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
                    <View style={styles.wait_body}>
	                  <Text style={styles.titleText}>Waiting...</Text>
                    </View>
	                  </View>
            );

        } else {
            return null;
        };
    }
}

const styles = StyleSheet.create({
    wait_screen: {
        elevation:100,
        backgroundColor: 'grey',
        opacity: 0.95,
        bottom: 0,
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },
    wait_body: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});


function select(state) {
    return {
        visible: state.wait.visible
    };
}

module.exports={Wait: connect(select)(Wait)};

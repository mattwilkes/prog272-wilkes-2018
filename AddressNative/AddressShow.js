import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './elf-styles';
import  { Text, View, Button } from 'react-native';


class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.debug = false;
        if (this.debug) {
            console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
        }
    }
    log(message, message2 = '', message3 = '') {
        if (this.debug) {
            console.log(message, message2, message3);
        }
    }

    render() {
        this.log('SHOW ADDRESS RENDER', this.props);
        return (
            <View className="App">
                <Text className="App-intro">
                    First Name: {this.props.address.firstName}
                </Text>
                <Text className="App-intro">
                    Last Name: {this.props.address.lastName}
                </Text>
                <Text className="App-intro">
                    Street: {this.props.address.address}
                </Text>
                <Text className="App-intro">City: {this.props.address.city}</Text>
                <Text className="App-intro">State: {this.props.address.state}</Text>
                <Text className="App-intro">Zip Code: {this.props.address.zip}</Text>
                <View style={styles.buttonView}>
                    <Button
                        onPress={this.props.setAddress}
                        title="Get Data"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }
}
AddressShow.propTypes = {
    address: PropTypes.object.string,
    setAddress: PropTypes.object
};
export default AddressShow;

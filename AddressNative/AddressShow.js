import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './elf-styles';
import  { Text, View, Button } from 'react-native';


class AddressShow extends Component {
    constructor() {
        super();
        this.debug = false;
        if (this.debug) {
            console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
        }
    }

    render() {
        return (
            <View className="App">
                <Text className="App-intro">First Name: {this.props.firstName}</Text>
                <Text className="App-intro">Last Name: {this.props.lastName}</Text>
                <Text className="App-intro">Street: {this.props.address}</Text>
                <Text className="App-intro">City: {this.props.city}</Text>
                <Text className="App-intro">State: {this.props.state}</Text>
                <Text className="App-intro">Zip Code: {this.props.zip}</Text>
                <View style={styles.buttonView}>
                    <Button
                        onPress={(event) => this.props.setAddress(-1, event)}
                        title="Get Data"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button
                        color="#841584"
                        onPress={(event) => this.props.setAddress(-1, event)}
                        title = "Back"
                    />
                    <Button
                        color="#841584"
                        onPress={(event) => this.props.setAddress(1, event)}
                        title = "Next"
                    />
                </View>
            </View>
        );
    }
}
AddressShow.propTypes = {
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
    }),
    setAddress: PropTypes.func
};
export default AddressShow;

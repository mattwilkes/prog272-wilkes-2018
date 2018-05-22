import React from 'react';
import addresses from './address-list';
import AddressShow from './AddressShow';
import {Text, View} from 'react-native';
import styles from './elf-styles';


export default class Address extends React.Component {
    constructor(props) {
        super(props);
        this.debug = false;
        this.addressIndex = 0;
        this.state = {
            address: addresses[this.addressIndex]
        };
        this.debug = true;
    }

    setAddress = () => {
        if (this.debug) {
            console.log('setAddress Called');
        }
        this.addressIndex = 1;

        this.setState({
            address: addresses[this.addressIndex]
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Expo!
                </Text>

                <View className="App">
                    <AddressShow
                        address={this.state.address}
                        setAddress={this.setAddress}
                    />
                </View>
            </View>
        );
    }
}


import React from 'react';
import tempAddressList from './address-list';
import AddressShow from './AddressShow';
import {Text, View} from 'react-native';
import styles from './elf-styles';
import 'whatwg-fetch'



export default class Address extends React.Component {
    constructor() {
        super();
        this.state = {
            addressIndex: 0,
            addressList: null,
            address: tempAddressList[this.addressIndex]
        };


    }

    getAddressList = () => {
        const that = this;
        return fetch('localhost:30026/address-list')
            .then(response => response.json())
            .then(AddressListFromServer => {
                console.log(AddressListFromServer);
                that.setState({
                    addressList: AddressListFromServer.addressLiast
                })
            })

            .catch(ex => {
                console.log(ex);
            });
    };

    componentDidMount() {

        this.getAddressList =this.getAddressList.bind(this);
        console.log(tempAddressList[this.addressIndex]);
        console.log(this.addressIndex);
        console.log(this.addressList[this.addressIndex]);
    }


    setAddress = (offset) => {
            this.addressIndex += offset;
        this.setState({
            address: this.addressList[this.addressIndex]
        });
        console.log(this.addressIndex);
    };
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <AddressShow
                        address={this.state.address}
                        setAddress={this.setAddress}
                    />
                </View>
            </View>
        );
    }
}


import React from 'react';
import tempAddressList from './address-list';
import AddressShow from './AddressShow';
import {Text, View} from 'react-native';
import styles from './elf-styles';
import 'whatwg-fetch'



export default class Address extends React.Component {
    constructor() {
        super();
        this.debug = false;
        this.canceled = false;
            this.addressIndex = 0;
            this.addressList = [{}];
            this.state = {
                address: tempAddressList[this.addressIndex]
        };
        this.getAddressList =this.getAddressList.bind(this);


    }

    getAddressList = () => {
        const that = this;
        return fetch('localhost:30026/address-list')
            .then(response => response.json())
            .then(AddressListFromServer => {
                console.log(AddressListFromServer);
                that.setState({
                    addressList: AddressListFromServer.addressList
                })
            })

            .catch(ex => {
                console.log(ex);
            });
    };

    componentDidMount() {

    }


    setAddress = (offset) => {
            this.addressIndex += offset;
        this.setState({
            address: this.addressList[this.addressIndex]

        });
        console.log(this.addressIndex);
        console.log(this.addressList)
    };
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <AddressShow
                        address={this.address}
                        setAddress={this.setAddress}
                    />
                </View>
            </View>
        );
    }
}


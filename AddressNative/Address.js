import React from 'react';
import tempAddressList from './address-list';
import AddressShow from './AddressShow';
import {Text, View} from 'react-native';
import styles from './elf-styles';
import 'whatwg-fetch'



export default class Address extends React.Component {
    constructor() {
        super();
            this.addressIndex = 0;
            this.addressList= [{}],
            this.state = {

                address: tempAddressList[this.addressIndex]
        };


    }
    componentDidMount(){
    this.getAddressList =this.getAddressList.bind(this);

}

    getAddressList = () => {
        return fetch('localhost:30026/address-list')
            .then((response) => response.json())
            .then((AddressListFromServer) => {
                console.log(AddressListFromServer);
                this.setState({addressList: AddressListFromServer});
                this.setState({addressIndex: 0})
            })
    };


    setAddress = (offset) => {

        if(this.addressIndex < 1 && offset < 0){
            this.addressIndex += 99;
        }
        else if(this.addressIndex >98 && offset > 0){
            this.addressIndex -= 99;
        }
        else {
            this.addressIndex += offset;
        }


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
                        address={this.address}
                        setAddress={this.setAddress}
                    />
                </View>
            </View>
        );
    }
}


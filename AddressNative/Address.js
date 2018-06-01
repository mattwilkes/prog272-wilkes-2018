import React from 'react';
import tempAddressList from './address-list';
import AddressShow from './AddressShow';
import {Text, View} from 'react-native';
import styles from './elf-styles';
import 'whatwg-fetch'



export default class Address extends React.Component {
    constructor(props) {
        super(props);
            this.addressIndex = 0;
            this.state = {
                addressList: [{}],
                address: tempAddressList[this.addressIndex]
        };
        this.getAddressList = this.getAddressList.bind(this);
        console.log('run da func')


    }


    getAddressList = () => {
        console.log('1');
        const that = this;
        console.log('2');
        fetch('http://localhost:30026/address-list')
    .then((result) => result.json())

    .then(function(result) {
            console.log('5');

            console.log(result.result);
            console.log('6');
            this.addressList = result;
            that.setState({addressList: result.result});
            console.log('7');

        })
    };
    componentDidMount(){
        console.log('componeent mount');
        this.getAddressList = this.getAddressList.bind(this);

    }

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
        console.log(this.addressList[this.addressIndex])
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


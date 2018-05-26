import React, { Component } from 'react';
import tempAddressList from '../address-list';
import AddressShow from '../Components/AddressShow';



class Address extends Component {
    constructor() {
        super();
        this.addressIndex = 0;
        this.addressList = null;
        this.state = {
            address: tempAddressList[this.addressIndex]
        };

    }


    getAddressList = () => {
        return fetch('/address-list')
            .then(response => response.json())
            .then(AddressListFromServer => {
                console.log(AddressListFromServer);
                this.addressList = AddressListFromServer;
            })
            .catch(ex => {
                console.log(ex);
            });
    };

    componentDidMount() {
        this.getAddressList();
    }

    setAddress = (offset) => {

        if(this.addressIndex < 1 && offset < 0){
            this.addressIndex += 99;
            console.log("poop")
        }
        else if(this.addressIndex >98 && offset > 0){
            this.addressIndex -= 99;
            console.log("oppo")
        }
        else {
            this.addressIndex += offset;
            console.log("im the big gay");
        }


        this.setState({
            address: this.addressList[this.addressIndex]
        });
        console.log(this.addressIndex);
    };


    render() {
        return (
            <div>
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress}
                />
            </div>
        );
    }

}
export default Address;

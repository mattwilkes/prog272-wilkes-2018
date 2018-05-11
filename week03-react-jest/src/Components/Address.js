import React, { Component } from 'react';
import addresses from '../address-list';
import AddressShow from '../Components/AddressShow';

class Address extends Component {
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
        if (this.debug) {
            console.log('ADDRESS RENDER');
        }
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress}
                />
            </div>
        );
    }
}

export default Address;

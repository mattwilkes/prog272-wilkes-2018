import React, { Component } from 'react';
import tempAddressList from '../address-list';
import AddressShow from '../Components/AddressShow';
import PropTypes from 'prop-types';



class Address extends Component {
    constructor(props) {
        super(props);
        this.debug = false;
        this.addressIndex = 0;
        this.addressList = null;
        this.state = {
            address: tempAddressList[this.addressIndex]
        };
        this.getAddressList();

    }


    getAddressList = () => {
        fetch('/address-list')
            .then(response => response.json())
            .then(AddressListFromServer => {
                console.log(AddressListFromServer);
                this.addressList = AddressListFromServer;
            })
            .catch(ex => {
                console.log(ex);
            });
    };

    setAddress = (offset) => {
        if (this.debug) {
            console.log('setAddress Called');
        }
        this.addressIndex += offset;
        this.setState({
            address: this.addressList[this.addressIndex]
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
                    setAddress={this.props.setAddress}
                />
            </div>
        );
    }

}
Address.propTypes = {
    setAddress: PropTypes.func
};
export default Address;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

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
            <div className="App">
                <p className="App-intro">
                    First Name: {this.props.address.firstName}
                </p>
                <p className="App-intro">
                    Last Name: {this.props.address.lastName}
                </p>
                <p className="App-intro">
                    Street: {this.props.address.address}
                </p>
                <p className="App-intro">City: {this.props.address.city}</p>
                <p className="App-intro">State: {this.props.address.state}</p>
                <p className="App-intro">Zip Code: {this.props.address.zip}</p>
                <button id="showAddressClick" onClick={this.props.setAddress}>
                    Show Address
                </button>
            </div>
        );
    }
}
AddressShow.propTypes = {
    address: PropTypes.object.string,
    setAddress: PropTypes.object
};
export default AddressShow;

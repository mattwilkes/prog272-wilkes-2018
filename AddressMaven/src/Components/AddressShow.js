import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import styles from './elf-styles';

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
                    Street: {this.props.address.street}
                </p>
                <p className="App-intro">City: {this.props.address.city}</p>
                <p className="App-intro">State: {this.props.address.state}</p>
                <p className="App-intro">Zip Code: {this.props.address.zip}</p>
                <RaisedButton
                    label="Set Address"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionAndroid />}
                    style={styles.button}
                    onClick={this.props.setAddress}
                />
            </div>
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

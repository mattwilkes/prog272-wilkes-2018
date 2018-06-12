import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Button from '@material-ui/core/Button';


class AddressShow extends Component {
    constructor() {
        super();
        this.debug = false;
        if (this.debug) {
            console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
        }
    }

    render() {

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
                <Button
                    variant="raised"
                    id="setAddress"
                    primary={true}
                    onClick={(event) => this.props.setAddress(-1, event)}
                    label = "Back"
                >
                    Back
                </Button>
                <Button
                    variant="raised"
                    id="setAddress"
                    primary={true}
                    onClick={(e) => this.props.setAddress(0, e)}>
                    Set Address
                </Button>
                <Button
                    variant="raised"
                    id="setAddress"
                    primary={true}
                    onClick={(event) => this.props.setAddress(1, event)}
                    label = "Next"
                >
                    Forward
                </Button>

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

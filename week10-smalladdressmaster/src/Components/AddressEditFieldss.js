import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class AddressFields extends Component {
    render() {
        return (
            <div>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    type="string"
                    value={this.props.address.firstName}
                    onChange={e =>
                        this.props.addressChangedByUser('firstName', e)
                    }
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="string"
                    value={this.props.address.lastName}
                    onChange={e =>
                        this.props.addressChangedByUser('lastName', e)
                    }
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="street"
                    label="Street"
                    type="string"
                    value={this.props.address.street}
                    onChange={e => this.props.addressChangedByUser('street', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="city"
                    label="City"
                    type="string"
                    value={this.props.address.city}
                    onChange={e => this.props.addressChangedByUser('city', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="state"
                    label="State"
                    type="string"
                    value={this.props.address.state}
                    onChange={e => this.props.addressChangedByUser('state', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="zip"
                    label="Zip Code"
                    type="string"
                    value={this.props.address.zip}
                    onChange={e => this.props.addressChangedByUser('zip', e)}
                    fullWidth
                />
            </div>
        );
    }
}

AddressFields.propTypes = {
    addressChangedByUser: PropTypes.func,
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string
    })
};

export default AddressFields;

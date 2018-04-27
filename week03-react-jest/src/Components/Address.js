import React, { Component } from 'react';

class Address extends Component {
    setAddress = () => {
        const address = this.props.addressList[1];

        this.setState({
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree,
            website: address.website
        })
    };
    constructor(props) {
        super(props);

        console.log('ADDRESS PROPS', typeof this.props);
        const address = this.props.addressList[0];
        this.state = {
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree,
            website: address.website
        }
    }

    render() {
        return (
            <div className="App">
                    <h2 className="App-title">Welcome to React</h2>
                <button id="setAddress" onClick={this.setAddress}>Set Address</button>

                <p className="App-intro">First Name: {this.state.firstName}</p>
                <p className="App-intro">Last Name: {this.state.lastName}</p>
                <p className="App-intro">Street: {this.state.address}</p>
                <p className="App-intro">City: {this.state.city}</p>
                <p className="App-intro">State: {this.state.state}</p>
                <p className="App-intro">Zip Code: {this.state.zip}</p>


            </div>

        );
    }

}
export default Address;

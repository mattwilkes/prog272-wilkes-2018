import React, { Component } from 'react';



class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.debug = false;
        console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
    }
    log(message, message2 = '', message3 = '') {
        if (!this.debug) {
            const label = this.constructor.name + ': ';
            console.log(message, message2, message3);
        }
    }

    render() {
        this.log("SHOW ADDRESS RENDER");
        return (
            <div className="App">
                <button id="setAddress" onClick={this.setAddress}>Set Address</button>

                <p className="App-intro">First Name: {this.props.address.firstName}</p>
                <p className="App-intro">Last Name: {this.props.address.lastName}</p>
                <p className="App-intro">Street: {this.props.address.address}</p>
                <p className="App-intro">City: {this.props.address.city}</p>
                <p className="App-intro">State: {this.props.address.state}</p>
                <p className="App-intro">Zip Code: {this.props.address.zip}</p>


            </div>

        );
    }

}
export default AddressShow;
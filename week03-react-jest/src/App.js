import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    getFileName = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };
    setAddress = () => {
        console.log('setAddress called.');
        this.setState({
            firstName: 'Patty',
            lastName: 'Murray',
            street: '915 2nd Ave',
            city: 'Seattle',
            state: 'Washington',
            zipCode: '98174'
        })
    };
    constructor() {
        super();
        this.state = {
            file: 'unknown',
            firstName: 'unknown',
            lastName: 'unknown',
            street: 'unknown',
            city: 'unknown',
            state: 'unknown',
            zipCode: 'unknown'
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="App-title">Welcome to React</h2>
                </header>
                <button id='getFile' onClick={this.getFileName}>Get File</button>
                <button id="setAddress" onClick={this.setAddress}>Set Address</button>
                <p className="App-intro">File: {this.state.file}</p>
                <p className="App-intro">First Name: {this.state.firstName}</p>
                <p className="App-intro">Last Name: {this.state.lastName}</p>
                <p className="App-intro">Street: {this.state.street}</p>
                <p className="App-intro">City: {this.state.city}</p>
                <p className="App-intro">State: {this.state.state}</p>
                <p className="App-intro">Zip Code: {this.state.zipCode}</p>


            </div>

        );
    }

}
export default App;

import React, { Component } from 'react';
import logo from '../logo.svg';

class Headers extends Component {

    render() {
        return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2 className="App-title">Welcome to React</h2>
        </header>
        );
    }
}
export default Headers
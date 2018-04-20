import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="App-title">Welcome to React</h2>
                </header>
                <button id='getFile' onClick={this.getFile}>Get File</button>
                <p className="App-intro">File: {this.state.file}</p>


            </div>

        );
    }

}
export default App;

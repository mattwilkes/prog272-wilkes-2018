import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


class Headers extends Component {


    render() {
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2 className="App-title">Welcome to React</h2>
                <div>
                    <div className="App">
                        <ul>
                            <li><Link to="/">Address</Link></li>
                            <li><Link to="/get-file">Get File</Link></li>
                        </ul>
                    </div>
                </div>
            </header>


        );

    }
}
export default Headers;
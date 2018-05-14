import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../App.css';
import Address from './Address';
import Headers from './Headers';
import GetFile from './GetFile';
import '../menu.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Headers />
                    <Route exact path="/" component={Address} />
                    <Route exact path="/get-file" component={GetFile} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

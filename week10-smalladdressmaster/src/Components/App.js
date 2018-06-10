import React, { Component } from 'react';
import '../App.css';
import Address from './Address';
import { BrowserRouter, Route } from 'react-router-dom';
import dataManager from '../tools/PouchDbManager';
import Headers from './Headers';
import Home from './Home';
import InitializeDatabase from './InitializeDatabase';

class App extends Component {
    componentDidMount() {
        this.db = dataManager.init();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Headers />
                    <Route id="home" exact path="/" component={Home} />
                    <Route
                        id="address"
                        path="/address"
                        render={props => (
                            <Address {...props} dataManager={dataManager} />
                        )}
                    />
                    <Route
                        id="initDb"
                        path="/init-db"
                        render={props => (
                            <InitializeDatabase
                                {...props}
                                dataManager={dataManager}
                            />
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

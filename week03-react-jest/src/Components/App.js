import React, {Component} from 'react';
import '../App.css';
import Address from './Address'
import Headers from './Headers';
import GetFile from './GetFile';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Headers/>
                <GetFile/>
                <Address/>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';



class GetFile extends Component {
    getFileName = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };
    constructor() {
        super();
        this.state = {
            file: 'unknown',
        }
    }
    render() {
        return (
            <div className="App">
                <p className="App-intro">File: {this.state.file}</p>
                <button id='getFile' onClick={this.getFileName}>Get File</button>

                <hr></hr>
            </div>

        );
    }
}
export default GetFile
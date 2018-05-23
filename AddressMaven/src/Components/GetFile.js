import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import styles from './elf-styles';

class GetFile extends Component {
    getFileName = () => {
        console.log('getFile called.');
        this.setState({ file: 'url-file.js' });
    };
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }
    render() {
        return (
            <div className="App">
                <p className="App-intro">File: {this.state.file}</p>
                <RaisedButton
                    id='GetFile'
                    label="Get File"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionAndroid />}
                    style={styles.button}
                    onClick={this.getFileName}
                />

                <hr />
            </div>
        );
    }
}
export default GetFile;

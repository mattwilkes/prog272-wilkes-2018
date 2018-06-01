import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
                <Button
                    variant = "raised"
                    id='GetFile'
                    label="Get File"
                    labelPosition="before"
                    primary={true}
                    style={styles.button}
                    onClick={this.getFileName}
                >
                    Get File
                </Button>

                <hr />
            </div>
        );
    }
}
export default GetFile;

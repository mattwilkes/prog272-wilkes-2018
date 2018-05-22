import React, { Component } from 'react';
import  { Text, View, Button } from 'react-native';
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
            <View className="App">
                <Text className="App-intro">File: {this.state.file}</Text>
                <View style={styles.buttonView}>
                    <Button
                        onPress={this.getFileName}
                        title="Get Data"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }
}
export default GetFile;

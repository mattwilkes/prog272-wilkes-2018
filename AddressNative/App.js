import React from 'react';
import GetFile from './GetFile';
import Headers from './Headers';
import Address from './Address';
import styles from './elf-styles';
import {View} from 'react-native';
import { NativeRouter, Route } from 'react-router-native';


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.addressContainer}>
                <NativeRouter>
                    <View className="App">
                        <Headers />
                        <Route exact path="/" component={Address} />
                        <Route exact path="/get-file" component={GetFile} />
                    </View>
                </NativeRouter>
            </View>
        );
    }
}
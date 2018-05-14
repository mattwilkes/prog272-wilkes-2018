import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    render() {
        return (
            <header >
                <div>
                    <AppBar
                        title="Address Maven"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonClick={this.handleToggle}
                    />
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={this.handleToggle}
                    >
                        <AppBar title="Address Maven"/>

                        <MenuItem
                            primaryText='Address'
                            containerElement={<Link to="/"/>}
                            onClick={this.handleToggle}
                        />

                        <MenuItem
                            primaryText='Get File'
                            containerElement={<Link to="/get-file"/>}
                            onClick={this.handleToggle}
                        />
                    </Drawer>
                </div>
            </header>
        );
    }
}
export default Headers;

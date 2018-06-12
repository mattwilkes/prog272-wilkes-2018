import React, { Component } from 'react';
import AddressEdit from './AddressEdit';
import '../App.css';
import Button from '@material-ui/core/Button';

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOpen: false,
            edits: {
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown'
            }
        };
    }
    setEdits = (name, event) => {
        var data = this.props.name;
        data[name] = event.target.value;
        this.setState({ edits: data });
    };

    addressEdit = address => {
        console.log(address);

        if (!address) {
            return this.setState({ editOpen: false });
        }

        this.setState({
            edits: address,
            editOpen: false
        });
    };

    save = () => {
        this.props.save(this.state.edits);
    };
    render() {
        const editDialog = this.state.editOpen ? (
            <AddressEdit
                address={this.props.name}
                open={this.state.editOpen}
                addressEdit={this.addressEdit}
            />
        ) : (
            <div/>
        );
        return (
            <div>
                <p>{this.props.name.firstName}</p>
                <p>{this.props.name.lastName}</p>
                <Button
                    color="secondary"
                    variant="raised"
                    onClick={this.props.showAddress}
                >
                    Show
                </Button>

                <Button
                    color="secondary"
                    variant="raised"
                    onClick={event => this.props.setAddress(-1, event)}
                >
                    Back
                </Button>
                <Button
                    color="secondary"
                    variant="raised"
                    onClick={event => this.props.setAddress(1, event)}
                >
                    Forward
                </Button>
                <div>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.save}
                    >
                        Save
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event =>
                            this.props.delete(this.props.name, event)
                        }
                    >
                        Delete
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={() => this.setState({editOpen: true})}
                    >
                    Edit
                    </Button>
                    {editDialog}
                </div>
            </div>
        );
    }
}

export default AddressShow;

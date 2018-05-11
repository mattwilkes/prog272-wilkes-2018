import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import AddressShow from './Components/AddressShow';

import addresses from './address-list';

describe('AddressShow Shallow Suite', function() {

    const debug = false;

    const addressTest = {
        firstName: 'Patty',
        lastName: 'Murray',
        address: '154 Russell Senate Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 224-2621',
        fax: '(202) 224-0238',
        tollfree: '(866) 481-9186'
    };


    const getIndex = (wrapper, index, talkToMe) => {
        if (debug || talkToMe) {
            const ninep = wrapper.find('div#addressShow').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={addresses[0]}/>);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={addresses[1]}/>);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays the first name', () => {
        defaultFieldTest('First Name: unknown', 0);
        afterClickFieldTest('First Name: ' + addressTest.firstName, 0);
    });

    it('renders and displays the last name', () => {
        defaultFieldTest('Last Name: unknown', 0);
        afterClickFieldTest('Last Name: ' + addressTest.lastName, 0);
    });

    it('renders and displays the Street name', () => {
        defaultFieldTest('Street: unknown', 0);
        afterClickFieldTest('Street: ' + addressTest.address, 0);
    });

    it('renders and displays the City name', () => {
        defaultFieldTest('City: unknown', 0);
        afterClickFieldTest('City: ' + addressTest.city, 0);
    });

    it('renders and displays the State name', () => {
        defaultFieldTest('State: unknown', 0);
        afterClickFieldTest('State: ' + addressTest.state, 0);
    });

    it('renders and displays the Zip', () => {
        defaultFieldTest('Zip Code: unknown', 0);
        afterClickFieldTest('Zip Code: ' + addressTest.zip, 0);
    });
});
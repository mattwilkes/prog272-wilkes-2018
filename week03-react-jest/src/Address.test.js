import React from 'react';
import Address from './Components/Address';
import { mount } from 'enzyme';
import addresses from './address-list';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'NaiveAddressEdit.test.js');
import './index.css';

const address = addresses[0];

describe('Naive Address Edit Mount Jest Suite', function () {

    it('renders and displays the default last name', () => {
        const wrapper = mount(<Address address={address}  />);
        const welcome = <p className='App-intro'>lastName: unknown</p>;
        elfDebugEnzyme.getIndex(wrapper, 'div#addressShowRender', 1, true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message for first name', () => {
        const wrapper = mount(<Address address={address}/>);
        const patty = <p className='App-intro'>lastName: Murray</p>;
        wrapper.find('button#showAddressClick').simulate('click');
        elfDebugEnzyme.getIndex(wrapper, 'div#addressShowRender', 1, true);
        expect(wrapper.contains(patty)).toEqual(true);
    });

});
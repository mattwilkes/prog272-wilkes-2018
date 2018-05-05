import React from 'react';
import Address from './Components/Address';
import { mount } from 'enzyme';
import addresses from './address-list';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'NaiveAddressEdit.test.js');
import './index.css';

const address = addresses[0];

describe('Address tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address/>);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('unknown');
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Patty');
        });
    });
});

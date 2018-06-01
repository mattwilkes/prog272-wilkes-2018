import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import addresses from './address-list';
import Address from './Components/Address';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


describe('Address tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MuiThemeProvider><Address /></MuiThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').firstName).toEqual(
            'unknown'
        );
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(
                wrapper.find('AddressShow').prop('address').firstName
            ).toEqual('Patty');
        });
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').lastName).toEqual(
            'unknown'
        );
    });

    it('renders state of lastName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(
                wrapper.find('AddressShow').prop('address').lastName
            ).toEqual('Murray');
        });
    });

    it('renders and displays the default street', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').street).toEqual(
            'unknown'
        );
    });

    it('renders state of street after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').street).toEqual(
                '154 Russell Senate Office Building'
            );
        });
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').city).toEqual(
            'unknown'
        );
    });

    it('renders state of city after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').city).toEqual(
                'Washington'
            );
        });
    });

    it('renders and displays the default state', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').state).toEqual(
            'unknown'
        );
    });

    it('renders state of state after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').state).toEqual(
                'D.C.'
            );
        });
    });

    it('renders and displays the default zip', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').zip).toEqual(
            'unknown'
        );
    });

    it('renders state of zip after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').zip).toEqual(
                '20510'
            );
        });
    });
});

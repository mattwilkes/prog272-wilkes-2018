import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Adapter from 'enzyme-adapter-react-16';
import Address from './Components/Address'
import addresses from './address-list';
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });

describe('Address Tests', function() {


    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">First Name: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of firstname paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const firstName = <p className="App-intro">First Name: Patty</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">Last Name: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of lastname paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const firstName = <p className="App-intro">Last Name: Murray</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

    it('renders and displays the default street', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">Street: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of street paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const firstName = <p className="App-intro">Street: 154 Russell Senate Office Building</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">City: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of city paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const firstName = <p className="App-intro">City: Washington</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

    it('renders and displays the default state', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">State: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of state paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const firstName = <p className="App-intro">State: D.C.</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

    it('renders and displays the default Zip code', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <p className="App-intro">Zip Code: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of zip code paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const firstName = <p className="App-intro">Zip Code: 20510</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

});
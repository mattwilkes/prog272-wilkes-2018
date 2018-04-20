import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });

describe('jest test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2 className="App-title">Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and reads Paragraph text', () => {
        const wrapper = shallow(<App />);
        const unknownFile = <p className="App-intro">File: unknown</p>;
        expect(wrapper.contains(unknownFile)).toEqual(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">File: url-file.js</p>;
        wrapper.find('#getFile').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">First Name: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of firstname paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const firstName = <p className="App-intro">First Name: Patty</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">Last Name: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of lastname paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const firstName = <p className="App-intro">Last Name: Murray</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

    it('renders and displays the default street', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">Street: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of street paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const firstName = <p className="App-intro">Street: 915 2nd Ave</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">City: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of city paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const firstName = <p className="App-intro">City: Seattle</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

    it('renders and displays the default state', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">State: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of state paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const firstName = <p className="App-intro">State: Washington</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

    it('renders and displays the default Zip code', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">Zip Code: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of zip code paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const firstName = <p className="App-intro">Zip Code: 98174</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toBe(true);
    });

});
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

});
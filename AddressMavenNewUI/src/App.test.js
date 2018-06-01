import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Headers from './Components/Headers';
import GetFile from './Components/GetFile';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';



describe('App Test', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider>
                <BrowserRouter>
                    <Headers />
                </BrowserRouter>
            </MuiThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads Paragraph text', () => {
        const wrapper = shallow(<GetFile />);
        const unknownFile = <p className="App-intro">File: unknown</p>;
        expect(wrapper.contains(unknownFile)).toEqual(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<GetFile />);
        const nineSign = <p className="App-intro">File: url-file.js</p>;
        wrapper.find('#GetFile').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });
});

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
const myProps = {
    testProp: 3,
    myProp: 2
};

ReactDOM.render(
    <App myProps={myProps} />,
    document.getElementById('root')
);
console.log(myProps.testProp);

console.log(myProps.myProp);




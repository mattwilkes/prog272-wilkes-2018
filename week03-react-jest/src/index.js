import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />,
    </div>,
    document.getElementById('root')
);registerServiceWorker();
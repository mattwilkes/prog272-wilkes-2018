import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
            <App />,
        </div>
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import store from './store';
import Router from './router';
import muiTheme from './muiTheme';
import {history} from './helpers/history';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en">
          <MuiThemeProvider theme={muiTheme}>
            <Router history={history} />
          </MuiThemeProvider>
        </IntlProvider>
      </Provider>
    );
  }
}

export default hot(module)(App);

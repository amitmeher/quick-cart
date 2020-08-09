import React from 'react';
// import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './Styles/Theme';
import NotificationProvider from './Util/NotificationProvider';
// import { Provider } from 'react-redux';
// import store from './Store';
import Application from './Application';

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <NotificationProvider>
        <Application />
      </NotificationProvider>
    </MuiThemeProvider>
  );
}

export default App;

import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import { SnackbarProvider } from 'notistack';
import Theme from './Styles/Theme';
import NotificationProvider from './Util/NotificationProvider';
import JavaScript from './Main/Questions/Components/JavaScript';
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

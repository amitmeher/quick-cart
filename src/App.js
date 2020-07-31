import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import { SnackbarProvider } from 'notistack';
import Theme from './Styles/Theme';
import NotificationProvider from './Util/NotificationProvider';
import JavaScript from './Main/Questions/Components/JavaScript';
import Login from './Main/Auth';

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      {/* <SnackbarProvider maxSnack={1}> */}
      <NotificationProvider>
        <Login />
      </NotificationProvider>
      {/* </SnackbarProvider> */}
    </MuiThemeProvider>
  );
}

export default App;

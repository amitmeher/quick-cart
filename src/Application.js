import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Main/Auth';
import SignUp from './Main/Auth/Components/SignUp';

const Application = () =>
    <>
        <Route exact path="/" component={Login} />
        <Route exact path="/s" component={SignUp} />
    </>

export default Application;
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import ErrorDetails from './pages/ErrorDetails'
import NewError from './pages/NewError'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/"exact component={Logon} />
            <Route path="/register" component={Register} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/profile" component={Profile} />
            <Route path="/errorDetails" component={ErrorDetails} />
            <Route path="/new/error" component={NewError} />

        </Switch>
        </BrowserRouter>
    )
}

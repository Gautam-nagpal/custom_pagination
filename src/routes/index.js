import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
    Homepage,
    Notfound,
    Login,
} from "../container"

import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/actions';
import { Navbar } from '../components';



export default function Routes() {
    let isLoggedIn = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    useEffect(() => {
        let isToken = false;
        if (window && window.localStorage) {
            let token = JSON.parse(window.localStorage.getItem("test"));
            isToken = token && token.length ? true : false
        }
        dispatch(actions.isAuthenticated(isToken))
    }, [isLoggedIn])

    return (
        <Switch>
            <PrivateRoute exact path="/" component={Homepage} isLoggedIn={isLoggedIn} />

            <PublicRoute path="/login" component={Login} />

            <PublicRoute component={Notfound} />
        </Switch>
    )
};




const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <React.Fragment>
            <Route
                {...rest}
                render={
                    props => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 250);
                        return (
                            rest.isLoggedIn ? (
                                <Grid container component="main" className="main_container" >
                                    <Navbar />
                                    <Component {...props} />
                                </Grid>
                            ) : (
                                    <Redirect to={`/login?redirect=${props.location.pathname}`} />
                                )
                        )
                    }
                }
            />
        </React.Fragment>
    )

}

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <React.Fragment >
            <Route
                {...rest}
                render={
                    props => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 250);
                        return (
                            <Grid container component="main" className="main_container" >
                                <Component {...props} />
                            </Grid>
                        )
                    }
                }
            />
        </React.Fragment>
    )
}
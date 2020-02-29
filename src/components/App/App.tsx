import React from "react";

import {Provider} from "mobx-react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {YMInitializer} from "react-yandex-metrika";

import AuthState from "../../stores/Admin/AuthState";
import MainState from "../../stores/Main/MainState";
import StaffState from "../../stores/Main/StaffState";

import Auth from "../Admin/Auth";
import NotFound from "./NotFound";
import About from "../Main/About/About";
import Staff from "../Main/Staff/Staff";
import Main from "../Main/Landing/Main";

import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const mainState = new MainState();
const authState = new AuthState();
const staffState = new StaffState();

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6f9dec'
        },
        secondary: {
            main: '#385d77'
        }
    }
});

class App extends React.Component<any, any> {
    render() {
        return (
            <React.Fragment>
                <YMInitializer accounts={[55660069]}/>
                <Provider mainState={mainState} authState={authState} staffState={staffState}>
                    <ThemeProvider theme={theme}>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/" component={Main} />
                                <Route path="/auth" component={Auth} />
                                <Route path="/about" component={About}/>
                                <Route path="/staff" component={Staff}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </BrowserRouter>
                    </ThemeProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

export default App;

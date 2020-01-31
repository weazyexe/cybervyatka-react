import React from "react";

import {Provider} from "mobx-react";
import {BrowserRouter, Route} from 'react-router-dom';

import Main from "../Main/Main";
import MainState from "../../stores/Main/MainState";
import {YMInitializer} from "react-yandex-metrika";
import Auth from "../Admin/Auth";
import AuthState from "../../stores/Admin/AuthState";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const mainState = new MainState();
const authState = new AuthState();

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
                <Provider mainState={mainState} authState={authState}>
                    <ThemeProvider theme={theme}>
                        <BrowserRouter>
                            <Route exact path="/" component={Main} />
                            <Route exact path="/auth" component={Auth} />
                        </BrowserRouter>
                    </ThemeProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

export default App;

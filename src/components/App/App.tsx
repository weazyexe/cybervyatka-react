import React from "react";

import {Provider} from "mobx-react";
import {BrowserRouter, Route} from 'react-router-dom';

import Main from "../Main/Main";
import MainState from "../../stores/Main/MainState";
import {YMInitializer} from "react-yandex-metrika";

const mainState = new MainState();

class App extends React.Component<any, any> {
    render() {
        return (
            <React.Fragment>
                <YMInitializer accounts={[55660069]}/>
                <Provider mainState={mainState}>
                    <BrowserRouter>
                        <Route exact path="/" component={Main} />
                    </BrowserRouter>
                </Provider>
            </React.Fragment>
        );
    }
}

export default App;

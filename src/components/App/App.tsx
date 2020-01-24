import React from "react";

import {Provider} from "mobx-react";
import {BrowserRouter, Route} from 'react-router-dom';

import Main from "../Main/Main";
import MainState from "../../stores/Main/MainState";


const mainState = new MainState();

class App extends React.Component<any, any> {
    render() {
        return (
            <Provider mainState={mainState}>
                <BrowserRouter>
                    <Route exact path="/" component={Main}/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

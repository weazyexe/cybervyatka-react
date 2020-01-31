import React from "react";
import MainState from "../../stores/Main/MainState";
import {inject, observer} from "mobx-react";

import ym from 'react-yandex-metrika';

import logo from './../../assets/logo_colored_blue.png';
import './Main.css';
import '../../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {randomNumber} from "../../utils/utils";
import {CircularProgress} from "@material-ui/core";
import Dates from "./Dates";
import Header from "./Header";
import Digits from "./Digits";
import Media from "./Media";
import Description from "./Description";

@inject("mainState")
@observer
export default class Main extends React.Component<MainProps, State> {

    constructor(props: MainProps) {
        super(props);
        this.state = {
            style: {
                position: 'static'
            },
            message: 'stay tuned.',
            allMessages: [
                'february',
                'февруари',
                'februar',
                'febreiro',
                'Φεβρουάριος',
                'luty',
                'fevereiro',
                'unor',
                'veebruar',
                'fevral',
                'ফেব্রুয়ারি',
                '二月',
                'Lub ob hlis ntuj',
                'فبراير' ,
                'февраль',
                'februarii',
                'februaro'
            ]
        };
    }


    async componentDidMount() {
        ym('hit', '/');
        await this.props.mainState.getTournamentSettings();
    }

    moveLogo() {
        const x = randomNumber(20, 70);
        const y = randomNumber(20, 70);
        const index = randomNumber(0, this.state.allMessages.length - 1);

        this.setState({
            style: {
               position: 'absolute',
               top: `${y}vh`,
               left: `${x}vw`
            },
            message: this.state.allMessages[index]
        });
    }

    render() {
        document.title = "Главная страница - CYBERVYATKA";

        if (this.props.mainState.isLoading) {
            return (
                <div className='foreground text-center py-5'>
                    <CircularProgress />
                </div>
            );
        }

        if (this.props.mainState.settings.isAnnounced) {
            return(
                <div className='parallax'>
                    <div className='foreground parallax__layer parallax__layer--back'/>

                    <div className='parallax__layer parallax__layer--base'>
                        <Header/>
                        <Description/>
                        <Dates/>
                        <Digits/>
                        <Media/>
                    </div>
                </div>
            );
        }

        return (
            <div className='text-center'>
                <div>
                    <img onMouseOver={() => this.moveLogo()} style={this.state.style} className='logo mx-auto' src={logo} alt='cv logo' />
                </div>
                <div className='accent-text py-3'>
                    {this.state.message}
                </div>
            </div>
        );
    }
}

interface MainProps {
    mainState: MainState
}

interface State {
    style: Style,
    message: string,
    allMessages: string[]
}

interface Style {
    position?: "static" | "absolute" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "-webkit-sticky" | "fixed" | "relative" | "sticky" | undefined;
    top?: string;
    left?: string;
}

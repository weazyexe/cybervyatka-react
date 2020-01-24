import React from "react";
import MainState from "../../stores/Main/MainState";
import {inject, observer} from "mobx-react";
import {Container} from "react-bootstrap";

import logo from './../../assets/logo_colored_blue.png';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {randomBytes} from "crypto";
import {randomNumber} from "../../utils/utils";
import {CircularProgress} from "@material-ui/core";

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
                'сюдаа.',
                'следующий.',
                'скоро.',
                'скюё хкйор.',
                'ланы.',
                'csgo <3',
                'dota <3',
                'react <3',
                'by weazyexe.',
                'stay tuned.',
                'поди ещё раз наведешь на логотип?)',
                'давай ещё',
                'хех)))'
            ]
        };
    }


    async componentDidMount() {
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
                <div className='foreground'>
                    <div className='header text-center'>
                        <div>
                            <img className='logo mx-auto' src={logo} alt='cv logo' />
                        </div>

                        <div className='header-text mt-5'>
                            CYBERVYATKA
                        </div>

                        <div className='accent-text mt-2'>
                            Киберспортивный турнир в Кирове
                        </div>
                    </div>

                    <div className='content text-center'>
                        <div className='accent-text'>
                            CYBERVYATKA - это киберспортивный турнир в городе Кирове, проводящийся с 2018 года в ВятГУ
                        </div>
                    </div>

                    <div className='content text-center'>
                        <div className='small-text'>
                            Регистрация
                        </div>
                        <div className='accent-text'>
                            N февраля - N марта
                        </div>
                        <div className='small-text mt-5'>
                            Групповой этап
                        </div>
                        <div className='accent-text'>
                            N марта - N марта
                        </div>
                        <div className='small-text mt-5'>
                            Плей-офф этап
                        </div>
                        <div className='accent-text'>
                            N марта - N марта
                        </div>
                        <div className='small-text mt-5'>
                            LAN-финалы
                        </div>
                        <div className='accent-text'>
                            N и N марта
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className='foreground text-center'>
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

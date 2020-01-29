import React from "react";

import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dates = () => {
    return(
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
    );
};

export default Dates;
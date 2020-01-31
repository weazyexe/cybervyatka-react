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
                2 - 7 марта
            </div>
            <div className='small-text mt-5'>
                Групповой этап
            </div>
            <div className='accent-text'>
                14 марта
            </div>
            <div className='small-text mt-5'>
                Плей-офф этап
            </div>
            <div className='accent-text'>
                15 марта
            </div>
            <div className='small-text mt-5'>
                LAN-финалы
            </div>
            <div className='accent-text'>
                21 марта
            </div>
        </div>
    );
};

export default Dates;

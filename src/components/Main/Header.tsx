import React from "react";

import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './../../assets/logo_colored_blue.png';

const Header = () => {
    return(
        <div>
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
        </div>
    );
};

export default Header;
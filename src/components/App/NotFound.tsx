import React from "react";

import logo from '../../assets/logo_colored_blue.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Main/Landing/Main.css';
import {inject, observer} from "mobx-react";
import MainState from "../../stores/Main/MainState";
import {Link} from "react-router-dom";

@inject("mainState")
@observer
class NotFound extends React.Component<NotFoundProps, any> {

    render() {
        if (!this.props.mainState.isLoading) {
            return(
                <div>
                    <div className='text-center'>
                        <img className='logo' src={logo} alt='cv logo'/>
                    </div>
                    <div className='text-center mt-5'>
                        <p className='accent-text'>Это не та страница, что вы ищите // 404</p>
                    </div>
                    <div className='text-center'>
                        <Link to='/'><p className='small-text'>Вернуться на главную</p></Link>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
};

interface NotFoundProps {
    mainState: MainState
}

export default NotFound;
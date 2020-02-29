import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cvLogo from '../../../assets/logo_colored_blue.png';
import Footer from "../../App/Footer";
import {Link} from "react-router-dom";

const About = () => {
    document.title = 'О турнире - CYBERVYATKA';
    return(
        <div>
            <Container className='mb-5 pb-5'>
                <Row className="mx-auto">
                    <Col>
                        <div style={{ textAlign: 'center' }}>
                            <Link to='/'>
                                <img src={cvLogo} alt='logo' className='logo mb-3 mt-5'/>
                            </Link>
                        </div>

                        <p className='text'><strong className='text-colored text-weight'>CYBERVYATKA</strong> - это
                            киберспортивная лига, которая проводится 2 раза в год, участие могут принять все желающие.
                            В широком плане турнир нацелен на:</p>
                        <ul className='mt-3'>
                            <li className='text-list'>Популяризацию киберспорта в городе Кирове</li>
                            <li className='text-list'>Изменения общего мнения о видеоиграх как только о средстве развлечения
                                и досуга
                            </li>
                            <li className='text-list'>Формирование соревновательной атмосферы среди любителей видеоигр</li>
                            <li className='text-list'>Формирование из молодого поколения киберспортсменов профессионального
                                уровня
                            </li>
                        </ul>

                        <p className='text mt-5 pt-5'>Участники турнира <strong
                            className='text-colored text-weight'>получат</strong>:</p>
                        <ul className='mt-3'>
                            <li className='text-list'>Опыт участия в соревнованиях компьютерного спорта</li>
                            <li className='text-list'>Возможность заявить о себе и своей команде</li>
                            <li className='text-list'>Повышение командного уровеня игры</li>
                            <li className='text-list'>Призы и подарки от партнеров</li>
                            <li className='text-list'>Яркие и позитивные эмоции</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default About;
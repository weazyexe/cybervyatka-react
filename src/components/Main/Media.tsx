import React from "react";

import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import photo4 from '../../assets/photo4.jpg';
import photo5 from '../../assets/photo5.jpg';
import photo6 from '../../assets/photo6.jpg';
import photo7 from '../../assets/photo7.jpg';
import photo8 from '../../assets/photo8.jpg';
import photo9 from '../../assets/photo9.jpg';
import photo10 from '../../assets/photo10.jpg';
import photo11 from '../../assets/photo11.jpg';
import photo12 from '../../assets/photo12.jpg';

const Media = () => {
    return(
        <div className='content'>
            <div className='accent-text text-center mb-5'>
                Какими были прошлые сезоны
            </div>
            <Container fluid className='mx-auto'>
                <Row className='m-0'>
                    <div className='text-center'>
                        <img src={photo1} alt='photo1' className='photo'/>
                        <img src={photo2} alt='photo2' className='photo'/>
                        <img src={photo3} alt='photo3' className='photo'/>
                        <img src={photo4} alt='photo4' className='photo'/>
                        <img src={photo5} alt='photo5' className='photo'/>
                        <img src={photo6} alt='photo6' className='photo'/>
                        <img src={photo7} alt='photo7' className='photo'/>
                        <img src={photo8} alt='photo8' className='photo'/>
                        <img src={photo9} alt='photo9' className='photo'/>
                        <img src={photo10} alt='photo10' className='photo'/>
                        <img src={photo11} alt='photo11' className='photo'/>
                        <img src={photo12} alt='photo12' className='photo'/>
                    </div>
                </Row>
                <Col md={12} className='text-center mt-5'>
                    <iframe title='about cv3' width="900" height="500" className="mb-5" frameBorder="0"
                            src="https://youtube.com/embed/IexOyKfihs8">
                    </iframe>
                    <iframe title='about cv2' width="900" height="500" className="mb-5" frameBorder="0"
                            src="https://youtube.com/embed/HOK3qOUU8eA?start=28">
                    </iframe>
                </Col>
            </Container>
        </div>
    );
};

export default Media;
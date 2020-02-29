import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Main/Landing/Main.css'

import wzLogo from '../../assets/wz.png';
import cvLogo from '../../assets/logo_colored_blue.png';

const Footer = () => {
    return(
        <Container fluid className="footer">
            <Col>
                <Row className="ml-auto mr-auto text-center pt-4 links">
                    <Link to='/about' style={{textDecoration: 'none'}} className="ml-auto mr-auto">
                        <p className="text-link">О турнире</p>
                    </Link>
                    <Link to='/staff' style={{textDecoration: 'none'}} className="ml-auto mr-auto">
                        <p className="text-link">Организаторы</p>
                    </Link>
                    <p className="text-link ml-auto mr-auto">Баг-репорт</p>
                </Row>
                <Row className="ml-auto mr-auto text-center">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{textDecoration: 'none'}} className="ml-auto mr-auto" target="_blank">
                        <p className="wz-link">with love, <strong>weazyexe</strong> for cybervyatka, 2k20</p>
                    </a>
                </Row>
                <Row className="ml-auto mr-auto text-center">
                    <img src={cvLogo} alt="cv logo" className="footer-logo ml-auto mb-3"/>
                    <img src={wzLogo} alt="wz logo" className="wz-logo ml-2 mr-auto mb-3"/>
                </Row>
            </Col>
        </Container>
    );
};

export default Footer;
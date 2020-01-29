import React from "react";

import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import Digit from "./Digit";

const Digits = () => {
    return(
        <div className='content text-center'>
            <Row>
                <Col md={6}>
                    <Digit digit="200+" title="Участников"/>
                    <Digit digit="2" title="Дисциплины"/>
                </Col>
                <Col md={6}>
                    <Digit digit="3" title="Проведенных сезона"/>
                    <Digit digit="100%" title="FUN"/>
                </Col>
            </Row>
        </div>
    );
};

export default Digits;
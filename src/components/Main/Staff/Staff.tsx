import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import cvLogo from '../../../assets/logo_colored_blue.png';
import Footer from "../../App/Footer";
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";
import StaffState from "../../../stores/Main/StaffState";
import StaffEntry from "./StaffEntry";
import {CircularProgress} from "@material-ui/core";

interface StaffProps {
    staffState: StaffState
}

@inject('staffState')
@observer
export default class Staff extends React.Component<StaffProps, any> {

    componentDidMount(): void {
        document.title = 'Организаторы - CYBERVYATKA';
        this.props.staffState.getStaff();
    }

    render() {
        const { staffState: { staff, isLoading } } = this.props;

        return(
            <div>
                <Container className='mb-5 pb-5'>
                    <Row className="mx-auto">
                        <Col>
                            <div style={{ textAlign: 'center' }}>
                                <Link to='/'>
                                    <img src={cvLogo} alt='logo' className='logo mb-3 mt-5'/>
                                </Link>
                                <p className='text text-center'>Организаторы турнира <strong className='text-colored text-weight'>CYBERVYATKA</strong></p>

                                {isLoading ?
                                    <div className='text-center mt-5'>
                                        <CircularProgress />
                                    </div>
                                :
                                    <Row className='mt-5'>
                                        {staff.map(person => <React.Fragment key={person.id}><StaffEntry person={person} /></React.Fragment>)}
                                    </Row>}
                            </div>
                        </Col>
                    </Row>
                </Container>
                {!isLoading && <Footer/>}
            </div>
        );
    }
}

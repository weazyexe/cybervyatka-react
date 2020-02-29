import React from "react";

import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from "react-bootstrap";
import Partner from "../../../model/Partner";
import {CircularProgress} from "@material-ui/core";

interface PartnersProps {
    partners: Partner[];
    isLoading: boolean;
}

const Partners = (props: PartnersProps) => {
    const { partners, isLoading } = props;
    return(
        <div className='content text-center'>
            <div className='accent-text mt-2'>
                Наши партнёры
            </div>
            {isLoading ?
                <div className='foreground text-center mt-2'>
                    <CircularProgress />
                </div>
                :
                <Row className='mt-2'>
                    {partners.map(partner =>
                        <img key={partner.id} src={partner.logo} alt={partner.title} className='mx-auto partner-logo' />)}
                </Row>
            }
        </div>
    );
};

export default Partners;
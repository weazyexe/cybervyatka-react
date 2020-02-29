import React from "react";
import Person from "../../../model/Person";
import {Col} from "react-bootstrap";

import telegram from '../../../assets/telegram.png';
import instagram from '../../../assets/instagram.png';
import vk from '../../../assets/vk.png';
import twitter from '../../../assets/twitter.png';

import './Staff.css';

interface StaffEntryProps {
    person: Person
}

const StaffEntry = (props: StaffEntryProps) => {
    const { person } = props;
    return(
        <Col className="m-3 mb-5 px-5">
            <img src={person.photo} alt={person.name} className="rounded-circle staff-avatar"/>
            <p className="name-text">{person.name}</p>
            <p className="position-text">{person.rank}</p>

            {person.contacts?.instagram &&
            <a href={`https://instagram.com/${person.contacts?.instagram}`} target="_blank">
                <img src={instagram} alt="inst" className="staff-link"/>
            </a>}

            {person.contacts?.vk &&
            <a href={`https://vk.com/${person.contacts?.vk}`} target="_blank">
                <img src={vk} alt="vk" className="staff-link"/>
            </a>}

            {person.contacts?.telegram &&
            <a href={`https://t-do.ru/${person.contacts?.telegram}`} target="_blank">
                <img src={telegram} alt="tg" className="staff-link"/>
            </a>}

            {person.contacts?.twitter &&
            <a href={`https://twitter.com/${person.contacts?.twitter}`} target='_blank'>
                <img src={twitter} alt='twi' className='staff-link'/>
            </a>}
        </Col>
    );
};

export default StaffEntry;
import React from "react";
import './Main.css';

const Digit = (props: IDigit) => {
    return(
        <div className='mb-5'>
            <div className='digit'>
                {props.digit}
            </div>
            <div className='digit-title'>
                {props.title}
            </div>
        </div>
    );
};

interface IDigit {
    digit: string,
    title: string
}

export default Digit;
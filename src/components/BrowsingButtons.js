import React from 'react';

import RightPointer from '../images/RightPointer.svg';
import LeftPointer from '../images/LeftPointer.svg';

import './BrowsingButtons.css';

const BrowsingButtons = (props) => {

    return (

        <div className='BrowsingButtons'>

            <button className='arrow-button' aria-label='Previous Item' onClick={() => props.previousItem()} >
                <img src={LeftPointer} alt='Previous Item' aria-hidden='true' />
            </button>

            <button className='arrow-button' aria-label='Next Item' onClick={() => props.nextItem()} >
                <img src={RightPointer} alt='Next Item' aria-hidden='true' />
            </button>

        </div>

    );

};

export default BrowsingButtons;
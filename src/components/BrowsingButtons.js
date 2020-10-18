import React from 'react';

import RightPointer from '../images/RightPointer.svg';
import LeftPointer from '../images/LeftPointer.svg';

import './BrowsingButtons.css';

const BrowsingButtons = (props) => {

    return (

        <div className='BrowsingButtons'>

            <div className='arrow-button'>
                <img src={LeftPointer} alt='Previous Item' onClick={() => props.previousItem()} />
            </div>

            <div className='arrow-button'>
                <img src={RightPointer} alt='Next Item' onClick={() => props.nextItem()} />
            </div>

        </div>

    );

};

export default BrowsingButtons;
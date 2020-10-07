import React from 'react';

import TechDebtLips from '../images/TechDebtLips.svg';

import './MainHeader.css';

const MainHeader = (props) => {

    return (
        <div className='MainHeader'>
            <img className='logo' src={TechDebtLips} alt='Tech Debt Lips' />
            <div className='title'>
                <h1>Dan Brioli</h1>
            </div>
        </div>
    );

};

export default MainHeader;
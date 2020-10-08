import React from 'react';

import Social from './Social';

import TechDebtLips from '../images/TechDebtLips.svg';

import './MainHeader.css';

const MainHeader = (props) => {

    return (
        <header className='MainHeader'>
            <img className='logo' src={TechDebtLips} alt='Tech Debt Lips' />
            <div className='title'>
                <h1>Dan Brioli</h1>
            </div>
            <Social />
        </header>
    );

};

export default MainHeader;
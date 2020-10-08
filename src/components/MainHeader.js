import React from 'react';

import TechDebtLips from '../images/TechDebtLips.svg';

import './MainHeader.css';

const MainHeader = (props) => {

    return (
        <header className='MainHeader'>
            <img className='logo' src={TechDebtLips} alt='Tech Debt Lips' />
            <div className='title'>
                <h1>Dan Brioli</h1>
            </div>
        </header>
    );

};

export default MainHeader;
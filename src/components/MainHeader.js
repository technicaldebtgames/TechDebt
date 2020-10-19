import React from 'react';

import Social from './Social/Social';

import TechDebtLips from './TechDebtLips.svg';

import './MainHeader.css';

const MainHeader = (props) => {

    return (
        <header className='MainHeader'>
            <img className='logo' src={TechDebtLips} alt='Tech Debt Lips' />
            <div className='title'>
                <h1>Dan Brioli</h1>
                <p className='subtitle1' aria-hidden='true'>WRITE COOL STUFF</p>
                <p className='subtitle2' aria-hidden='true'>PROBABLY NOT A ROBOT</p>
                <p className='subtitle3' aria-hidden='true'>WEB DEVELOPMENT AND DESIGN</p>
                <p className='subtitle4' aria-hidden='true'>DOCUMENTATION AND ILLUSTRATION</p>
                <p className='subtitle5' aria-hidden='true'>BRANDING AND VISUALIZATIONS</p>
                <p className='subtitle6' aria-hidden='true'>INCREASINGLY SMALL AND FADING TEXT</p>
            </div>
            <Social />
        </header>
    );

};

export default MainHeader;
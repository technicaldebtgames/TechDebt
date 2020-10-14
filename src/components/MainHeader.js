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
                <p className='subtitle1'>WRITE TECH RIGHT</p>
                <p className='subtitle2'>HIT YOUR DEADLINES</p>
                <p className='subtitle3'>VOTED LEAST LIKELY TO BE A ROBOT</p>
                <p className='subtitle4'>LONG FORM WRITTEN CONTENT AND ILLUSTRATION</p>
                <p className='subtitle5'>WEB DEVELOPMENT, TECH CONSULTING, CONTENT CREATION</p>
                <p className='subtitle6'>INCREASINGLY SMALL AND HUMOROUS TEXT THAT YOU CAN'T READ</p>
            </div>
            <Social />
        </header>
    );

};

export default MainHeader;
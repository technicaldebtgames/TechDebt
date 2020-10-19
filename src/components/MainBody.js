import React from 'react';

import About from './About/About';
import Writing from './Writing/Writing';
import Illustration from './Illustration/Illustration';
import Rates from './Rates/Rates';

import './MainBody.css';

const MainBody = (props) => {
    
    return (
        <div className='MainBody'>
            <About />
            <Writing />
            <Illustration />
            <Rates />
        </div>
    );

};

export default MainBody;
import React from 'react';

import About from './About/About';
import Writing from './Writing/Writing';
import Illustration from './Illustration/Illustration';
import Experimental from './Experimental/Experimental';
import Rates from './Rates/Rates';

import './MainBody.css';

const MainBody = (props) => {
    
    return (
        <div className='MainBody'>
            <About />
            <Writing />
            <Illustration />
            <Experimental />
            <Rates />
        </div>
    );

};

export default MainBody;
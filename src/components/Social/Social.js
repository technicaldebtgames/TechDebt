import React from 'react';

import Envelope from './envelope.svg';
import Github from './github.svg';
import LinkedIn from './linked-in.svg';
//import Twitter from './twitter.svg';

import './Social.css';

const Social = (props) => {

    return (
        <div className='Social'>
            <a href='mailto:dan.s.brioli@gmail.com'><img src={Envelope} alt='Email'/></a>
            <a href='https://www.linkedin.com/in/dan-brioli/'><img src={LinkedIn} alt='LinkedIn'/></a>
            <a href='https://github.com/technicaldebtgames'><img src={Github} alt='Github'/></a>
            {/*<a href='https://twitter.com/TechDebtWriting'><img src={Twitter} alt='Twitter'/></a>*/}
        </div>
    );

};

export default Social;
import React from 'react';

import Envelope from '../images/envelope.svg';
import Github from '../images/github.svg';
import LinkedIn from '../images/linked-in.svg';
//import Youtube from '../images/youtube.svg';
import Twitter from '../images/twitter.svg';

import './Social.css';

const Social = (props) => {

    return (
        <div className='Social'>
            <a href='mailto:dan.s.brioli@gmail.com'><img src={Envelope} alt='Email'/></a>
            <a href='https://www.linkedin.com/in/dan-brioli/'><img src={LinkedIn} alt='LinkedIn'/></a>
            <a href='https://github.com/technicaldebtgames'><img src={Github} alt='Github'/></a>
            <a href='https://twitter.com/TechDebtWriting'><img src={Twitter} alt='Twitter'/></a>
            {/*<a href='https://www.youtube.com/channel/UCSkWWnCdZMTm7yWU-hLD5UQ'><img src={Youtube} alt='Youtube'/></a>*/}
        </div>
    );

};

export default Social;
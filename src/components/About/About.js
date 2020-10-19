import React, {useState} from 'react';

import ProfileImage from './db_profile_512.jpg';

import './About.css';

const About = (props) => {

    const [expandAbout, setExpandAbout] = useState(false);

    return (
        
        <div className='About'>
            <button className='header-button' onClick={() => setExpandAbout(!expandAbout)}>
                <h1>Who I Am {expandAbout ? '▲' : '▼'}</h1>
            </button>
            <div className={expandAbout ? 'AboutContent' : 'hide'}>
                <h3>Hi, I'm Dan.</h3>
                <img className='profile-img' src={ProfileImage} alt='Dan Brioli' />
                <p>I'm here to make your life easier with <b>content and illustrations</b> for your tech or B2B blog, <b>design and development solutions</b> for your website or brand, and <b>clear and concise documentation</b> for your users.</p>
                <p><a href='mailto:dan.s.brioli@gmail.com'>Send me an email</a> or visit my social links at the top of the page so we can work together on getting you results!</p>
            </div>
        </div>
    );

};

export default About;
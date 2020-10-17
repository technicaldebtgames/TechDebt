import React from 'react';

import ProfileImage from '../images/db_profile_512.jpg';
import BAELogo from '../images/bae_logo.jpg';
import CelticLogo from '../images/celtic_logo.png';
import UnicentricLogo from '../images/unicentric_logo.png';

const About = (props) => {

    return (
        <div>
            <h3>Hi, I'm Dan.</h3>
                <img className='inline-img-left' src={ProfileImage} alt='Dan Brioli' />
                <p>I'm here to make your life easier with <b>content and illustrations</b> for your tech or B2B blog, <b>design and development expertise</b> for your website or brand, and <b>clear and concise documentation</b> for your users.</p>
                <p><a href='mailto:dan.s.brioli@gmail.com'>Send me an email</a> or visit my social links at the top of the page so we can work together on getting you results!</p>
                <p><i>Organizations I've provided solutions for:</i></p>
                <div className='logo-gallery'>
                    <img className='logo-gallery-img' src={BAELogo} alt='BAE Systems' />
                    <img className='logo-gallery-img' src={CelticLogo} alt='Celtic Healthcare' />
                    <img className='logo-gallery-img' src={UnicentricLogo} alt='Unicentric' />
                </div>
        </div>
    );

};

export default About;
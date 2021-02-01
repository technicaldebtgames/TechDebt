import React, {useState, useRef, useEffect} from 'react';

import ProfileImage from './db_profile_512.jpg';
import BurnRateZeroLogo from './BurnRateZeroLogo.png';
import TheStartupLogo from './TheStartupLogo.png';
import LevelUpCodingLogo from './levelUpCodingLogo.png';
import DevGeniusLogo from './DevGeniusLogo.png';
import TheWritingCooperativeLogo from './TheWritingCooperativeLogo.png';
import IlluminationLogo from './illumination_logo.png';
import SUPERJUMPLogo from './SUPERJUMPLogo.png';
import PoliticallySpeakingLogo from './politically_speaking_logo.png';
import SmallBusinessStrong from './SmallBusinessStrong.jpeg';
import CoFoundersTownLogo from './CoFoundersTownLogo.svg';
import CelticLogo from './CelticLogo.png';

import './About.css';

const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const About = (props) => {

    const firstRender = useRef(true);

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailValidated, setEmailValidated] = useState(false);
    const [messageValidated, setMessageValidated] = useState(false);

    const [expandAbout, setExpandAbout] = useState(false);

    useEffect(() => {

        if (firstRender.current) {
            firstRender.current = false;
            return;
        };

        const validateEmail = () => {
            if (email.match(emailFormat)) {
                return true;
            }
            else {
                return false;
            };
        };

        const validateMessage = () => {
            if (message.trim().length > 5) {
                return true;
            }
            else {
                return false;
            }
        };

        setEmailValidated(validateEmail());
        setMessageValidated(validateMessage());

    }, [email, message]);

    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        event.preventDefault();
        setMessage(event.target.value);
    };

    return (
        <div className='About'>
            <button className='header-btn' onClick={() => setExpandAbout(!expandAbout)}>
                <h1>Who I Am {expandAbout ? '▲' : '▼'}</h1>
            </button>
            <div className={expandAbout ? 'AboutContent' : 'hide'}>
                <h3>Hi, I'm Dan.</h3>
                <img className='profile-img' src={ProfileImage} alt='Dan Brioli' />
                <p>I'm here to make your life easier with <b>writing and illustrations</b> for your tech or B2B blog, <b>design and development solutions</b> for your website or brand, and <b>clear and engaging user documentation</b>.</p>
                <h3>Get in touch!</h3>
                <form className='contact-form' action='https://formspree.io/f/xayloaja' method='POST'>
                    <label className='form-label' htmlFor='_replyto'>What's your email?</label>
                    <input className='form-text-input' type='text' name='_replyto' value={email} onChange={handleEmailChange} />
                    {emailValidated && <label className='form-label' htmlFor='message'>What can I help you with?</label>}
                    {emailValidated && <textarea className='form-textarea-input' name='message' value={message} onChange={handleMessageChange} />}
                    {emailValidated && messageValidated && <button className='form-submit-btn' type='submit'>Send It!</button>}
                </form>
                <h3>Writing for:</h3>
                <div className='feature-wrapper'>
                    <a href='https://medium.com/swlh'><img className='feature-img' src={TheStartupLogo} alt='The Startup Logo' /></a>
                </div>
                <div className='feature-wrapper'>
                    <a href='https://levelup.gitconnected.com/'><img className='feature-img' src={LevelUpCodingLogo} alt='Level Up Coding Logo' /></a>
                </div>
                <div className='feature-wrapper'>
                    <a href='https://medium.com/dev-genius'><img className='feature-img' src={DevGeniusLogo} alt='Dev Genius Logo' /></a>
                </div>
                <div className='feature-wrapper'>
                    <a href='https://writingcooperative.com/'><img className='feature-img' src={TheWritingCooperativeLogo} alt='The Writing Cooperative Logo' /></a>
                </div>
                <div className='feature-wrapper'>
                    <a href='https://medium.com/politically-speaking'><img className='feature-img' src={PoliticallySpeakingLogo} alt='Politically Speaking Logo' /></a>
                </div>
                <div className='feature-wrapper'>
                    <a href='https://medium.com/illumination'><img className='feature-img' src={IlluminationLogo} alt='Illumination Logo' /></a>
                </div>
                <div className='feature-wrapper'>
                    <a href='https://medium.com/super-jump'><img className='feature-img' src={SUPERJUMPLogo} alt='SUPERJUMP Logo' /></a>
                </div>
                <div className='feature-wrapper'>
                    <a href='https://medium.com/small-business-strong'><img className='feature-img' src={SmallBusinessStrong} alt='Small Business Strong Logo' /></a>
                </div>
                <div className='feature-wrapper'>
                    <a href='https://medium.com/burn-rate-zero'><img className='feature-img' src={BurnRateZeroLogo} alt='Burn Rate Zero Logo' /></a>
                </div>
                <div className='feature-wrapper'>
                    <a href='https://www.cofounderstown.com/'><img className='feature-img' src={CoFoundersTownLogo} alt='CoFoundersTown Logo' /></a>
                </div>
                <h3>Documentation for:</h3>
                <div className='feature-wrapper'>
                    <a href='https://www.residentialhealthcaregroup.com/'><img className='feature-img' src={CelticLogo} alt='Celtic Healthcare Logo' /></a>
                </div>
            </div>
        </div>
    );

};

export default About;
import React, {useState, useRef, useEffect} from 'react';

import ProfileImage from './db_profile_512.jpg';

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
                <p>I'm here to make your life easier with <b>content and illustrations</b> for your tech or B2B blog, <b>design and development solutions</b> for your website or brand, and <b>clear and engaging user documentation</b>.</p>
                <p>I'm currently writing for <a href='https://medium.com/swlh'>The Startup</a>, Medium's largest publication. In the past, I've written user documentation for <a href='https://www.residentialhealthcaregroup.com/'>Celtic Healthcare</a>.</p>
                <p>Fill out this <i>super quick</i> form to start a conversation about how I can help you <b>make the content your users <i>need to see!</i></b></p>
                <form className='contact-form' action='https://formspree.io/f/xayloaja' method='POST'>
                    <label className='form-label' htmlFor='_replyto'>What's your email?</label>
                    <input className='form-text-input' type='text' name='_replyto' value={email} onChange={handleEmailChange} />
                    {emailValidated && <label className='form-label' htmlFor='message'>What can I help you with?</label>}
                    {emailValidated && <textarea className='form-textarea-input' name='message' value={message} onChange={handleMessageChange} />}
                    {emailValidated && messageValidated && <button className='form-submit-btn' type='submit'>Send It!</button>}
                </form>
            </div>
        </div>
    );

};

export default About;
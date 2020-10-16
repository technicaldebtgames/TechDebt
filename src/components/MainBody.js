import React, {useState} from 'react';

import ProfileImage from '../images/db_profile_512.jpg';

import BAELogo from '../images/bae_logo.jpg';
import CelticLogo from '../images/celtic_logo.png';
import UnicentricLogo from '../images/unicentric_logo.png';

import DesertTrees from '../images/DesertTrees.svg';
import AngryFace from '../images/angry_face.svg';
import MonkeyPaw from '../images/MonkeyPaw.svg';
import CPU from '../images/cpu.svg';
import SquareThinker from '../images/SquareThinker.svg';
import ChickenLaptop from '../images/ChickenLaptop.svg';

import TechnicalDebt from '../articles/TechnicalDebt';
import FreeTools from '../articles/FreeTools';

//import TechDebtQuadrant from '../images/techDebtQuadrants.svg';

import ArticleButtons from './ArticleButtons';

import './MainBody.css';

const MainBody = (props) => {

    const [expandAbout, setExpandAbout] = useState(false);
    const [expandWriting, setExpandWriting] = useState(false);
    const [expandArt, setExpandArt] = useState(false);
    const [expandEstimate, setExpandEstimate] = useState(false);

    const [currentArticle, setCurrentArticle] = useState(0);

    const articles = [TechnicalDebt, FreeTools];

    const nextArticle = () => {
        if (currentArticle === articles.length - 1) {
            setCurrentArticle(0);
        }
        else {
            setCurrentArticle(currentArticle + 1);
        };
    };

    const previousArticle = () => {
        if (currentArticle === 0) {
            setCurrentArticle(articles.length - 1);
        }
        else {
            setCurrentArticle(currentArticle - 1);
        };
    };

    return (
        <div className='MainBody'>
            
            <h1 onClick={() => setExpandAbout(!expandAbout)}>Who I Am {expandAbout ? '▲' : '▼'}</h1>

            <section className={expandAbout ? 'about' : 'hide'}>
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
            </section>
            
            <h1 onClick={() => setExpandWriting(!expandWriting)}>Writing {expandWriting ? '▲' : '▼'}</h1>

            <section className={expandWriting ? 'writing' : 'hide'}>
                <ArticleButtons previousArticle={previousArticle} nextArticle={nextArticle} />
                {articles[currentArticle]()}
            </section>
            
            <h1 onClick={() => setExpandArt(!expandArt)}>Illustration {expandArt ? '▲' : '▼'}</h1>
            
            <img className={expandArt ? 'art' : 'hide'} src={SquareThinker} alt='Square Thinker Emoji'/>
            <img className={expandArt ? 'art' : 'hide'} src={AngryFace} alt='Angry Face'/>
            <img className={expandArt ? 'art' : 'hide'} src={CPU} alt='CPU In Hands'/>
            <img className={expandArt ? 'art' : 'hide'} src={ChickenLaptop} alt='Chicken And Laptop'/>
            <img className={expandArt ? 'art' : 'hide'} src={MonkeyPaw} alt='Monkey Paw'/>
            <img className={expandArt ? 'art' : 'hide'} src={DesertTrees} alt='Desert Trees'/>

            <h1 onClick={() => setExpandEstimate(!expandEstimate)}>Rates {expandEstimate ? '▲' : '▼'}</h1>

            <section className={expandEstimate ? 'estimates' : 'hide'}>
                <h3>Writing / Editing</h3>
                <p><b>Blog, long (1k+):</b> $0.30/word</p>
                <p><b>Blog, short (1k or less):</b> $0.20/word</p>
                <p><b>Documentation (all types):</b> By quote.</p>
                <p className='lighter'><i>Rates are negotiable based on requirements. Per-article or retainer rates may be available.</i></p>
                <h3>Illustration / Design</h3>
                <p><b>Illustrations:</b> $50-$500</p>
                <p><b>Logo / brand design:</b> $500-$5,000</p>
                <p><b>Chart / data visualization:</b> By quote.</p>
                <p><b>Web design / development:</b> By quote.</p>
                <p className='lighter'><i>Rates are negotiable based on requirements.</i></p>
            </section>
        
        </div>
    );

};

export default MainBody;
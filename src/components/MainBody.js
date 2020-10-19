import React, {useState} from 'react';
import 'remove-focus-outline';

import Articles from '../content/articles';
import Illustrations from '../content/illustrations';

import About from './About/About';
import BrowsingButtons from './BrowsingButtons/BrowsingButtons';
import Rates from './Rates';

import './MainBody.css';

const MainBody = (props) => {

    const [expandAbout, setExpandAbout] = useState(false);
    const [expandWriting, setExpandWriting] = useState(false);
    const [expandArt, setExpandArt] = useState(false);
    const [expandRates, setExpandRates] = useState(false);

    const [currentArticle, setCurrentArticle] = useState(0);
    const [currentIllustration, setCurrentIllustration] = useState(0);

    const articles = Articles;
    const illustrations = Illustrations;

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

    const nextIllustration = () => {
        if (currentIllustration === illustrations.length - 1) {
            setCurrentIllustration(0);
        }
        else {
            setCurrentIllustration(currentIllustration + 1);
        };
    };

    const previousIllustration = () => {
        if (currentIllustration === 0) {
            setCurrentIllustration(illustrations.length - 1);
        }
        else {
            setCurrentIllustration(currentIllustration - 1);
        };
    };

    return (
        <div className='MainBody'>
            
            <button className='header-button' onClick={() => setExpandAbout(!expandAbout)}>
                <h1>Who I Am {expandAbout ? '▲' : '▼'}</h1>
            </button>
            <section className={expandAbout ? 'about' : 'hide'}>
                <About />
            </section>
            
            <button className='header-button' onClick={() => setExpandWriting(!expandWriting)}>
                <h1>Writing {expandWriting ? '▲' : '▼'}</h1>
            </button>
            <section className={expandWriting ? 'writing' : 'hide'}>
                <BrowsingButtons previousItem={previousArticle} nextItem={nextArticle} />
                {articles[currentArticle]()}
            </section>
            
            <button className='header-button' onClick={() => setExpandArt(!expandArt)}>
                <h1>Illustration {expandArt ? '▲' : '▼'}</h1>
            </button>
            <section className={expandArt ? '' : 'hide'}>
                <BrowsingButtons previousItem={previousIllustration} nextItem={nextIllustration} />
                <img className='art' src={illustrations[currentIllustration].src} alt={illustrations[currentIllustration].alt} />
            </section>

            <button className='header-button' onClick={() => setExpandRates(!expandRates)}>
                <h1>Rates {expandRates ? '▲' : '▼'}</h1>
            </button>
            <section className={expandRates ? 'Rates' : 'hide'}>
                <Rates />
            </section>
        
        </div>
    );

};

export default MainBody;
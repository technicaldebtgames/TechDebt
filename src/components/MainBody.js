import React, {useState} from 'react';

import Articles from '../articles';

import About from './About';
import ArticleButtons from './ArticleButtons';
import Art from './Art';
import Rates from './Rates';

import './MainBody.css';

const MainBody = (props) => {

    const [expandAbout, setExpandAbout] = useState(false);
    const [expandWriting, setExpandWriting] = useState(false);
    const [expandArt, setExpandArt] = useState(false);
    const [expandEstimate, setExpandEstimate] = useState(false);

    const [currentArticle, setCurrentArticle] = useState(0);

    const articles = Articles;

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
                <About />
            </section>
            
            <h1 onClick={() => setExpandWriting(!expandWriting)}>Writing {expandWriting ? '▲' : '▼'}</h1>
            <section className={expandWriting ? 'writing' : 'hide'}>
                <ArticleButtons previousArticle={previousArticle} nextArticle={nextArticle} />
                {articles[currentArticle]()}
            </section>
            
            <h1 onClick={() => setExpandArt(!expandArt)}>Illustration {expandArt ? '▲' : '▼'}</h1>
            <section className={expandArt ? '' : 'hide'}>
                <Art />
            </section>

            <h1 onClick={() => setExpandEstimate(!expandEstimate)}>Rates {expandEstimate ? '▲' : '▼'}</h1>
            <section className={expandEstimate ? 'estimates' : 'hide'}>
                <Rates />
            </section>
        
        </div>
    );

};

export default MainBody;
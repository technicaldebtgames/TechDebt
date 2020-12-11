import React, {useState} from 'react';

import Articles from '../../content/articles';

import BrowsingButtons from '../BrowsingButtons';

import './Writing.css';

const articles = Articles;

const Writing = (props) => {

    //todo: turn all of this into a hook or something reusable
    const [expandWriting, setExpandWriting] = useState(false);
    const [currentArticle, setCurrentArticle] = useState(0);

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
        <div className='Writing'>
            <button className='header-btn' onClick={() => setExpandWriting(!expandWriting)}>
                <h1 className='header-btn-text'>Writing {expandWriting ? '▲' : '▼'}</h1>
            </button>
            <div className={expandWriting ? 'Writing' : 'hide'}>
                <BrowsingButtons previousItem={previousArticle} nextItem={nextArticle} />
                {articles[currentArticle]()}
            </div>
        </div>
    );

};

export default Writing;
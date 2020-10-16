import React from 'react';

import './ArticleButtons.css';

const ArticleButtons = (props) => {

    return (

        <div className='ArticleButtons'>

            <div className='arrow-button'>
                <span onClick={() => props.previousArticle()}>⯇</span>
            </div>

            <div className='arrow-button'>
                <span onClick={() => props.nextArticle()}>⯈</span>
            </div>

        </div>

    );

};

export default ArticleButtons;
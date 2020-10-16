import React from 'react';

import RightPointer from '../images/RightPointer.svg';
import LeftPointer from '../images/LeftPointer.svg';

import './ArticleButtons.css';

const ArticleButtons = (props) => {

    return (

        <div className='ArticleButtons'>

            <div className='arrow-button'>
                <img src={LeftPointer} alt='Previous Article Button' onClick={() => props.previousArticle()} />
            </div>

            <div className='arrow-button'>
                <img src={RightPointer} alt='Next Article Button' onClick={() => props.nextArticle()} />
            </div>

        </div>

    );

};

export default ArticleButtons;
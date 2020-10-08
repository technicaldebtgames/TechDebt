import React from 'react';

import DesertTrees from '../images/DesertTrees.svg';

import './MainBody.css';

const MainBody = (props) => {

    return (
        <div className='MainBody'>
            <h2><a href='https://thevarietyshow.netlify.app/'>The Dan and Liz Variety Show</a></h2>
            <h2><a href='https://stylex.netlify.app/'>STYLEX</a></h2>
            <h2><a href='https://video-essays.netlify.app/'>Video Essay Transcripts</a></h2>
            <h2>Art</h2>
            <img className='art-svgs' src={DesertTrees} alt='Desert Trees'/>
        </div>
    );

};

export default MainBody;
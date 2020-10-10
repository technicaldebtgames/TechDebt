import React, {useState} from 'react';

import DesertTrees from '../images/DesertTrees.svg';
import AngryFace from '../images/angry_face.svg';
import MonkeyPaw from '../images/MonkeyPaw.svg';

import './MainBody.css';

const MainBody = (props) => {

    const [expandProjects, setExpandProjects] = useState(false);
    const [expandArt, setExpandArt] = useState(false);
    const [expandWriting, setExpandWriting] = useState(false);

    return (
        <div className='MainBody'>
            <h1 onClick={() => setExpandProjects(!expandProjects)}>Projects {expandProjects ? '▲' : '▼'}</h1>
            <h2 className={expandProjects ? '' : 'hide'}><a href='https://thevarietyshow.netlify.app/'>The Dan and Liz Variety Show</a></h2>
            <h2 className={expandProjects ? '' : 'hide'}><a href='https://stylex.netlify.app/'>STYLEX</a></h2>
            <h2 className={expandProjects ? '' : 'hide'}><a href='https://video-essays.netlify.app/'>Video Essay Transcripts</a></h2>
            <h1 onClick={() => setExpandArt(!expandArt)}>Art {expandArt ? '▲' : '▼'}</h1>
            <img className={expandArt ? 'art' : 'hide'} src={AngryFace} alt='Angry Face'/>
            <img className={expandArt ? 'art' : 'hide'} src={MonkeyPaw} alt='Monkey Paw'/>
            <img className={expandArt ? 'art' : 'hide'} src={DesertTrees} alt='Desert Trees'/>
            <h1 onClick={() => setExpandWriting(!expandWriting)}>Writing {expandWriting ? '▲' : '▼'}</h1>
            <article className={expandWriting ? 'writing' : 'hide'}>
                <h3>Don't Worry, Content Incoming</h3>
            </article>
            
        
        </div>
    );

};

export default MainBody;
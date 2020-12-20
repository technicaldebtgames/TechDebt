import React, {useState} from 'react';

import Illustrations from '../../content/illustrations';

import BrowsingButtons from '../BrowsingButtons';

import './Illustration.css';

const illustrations = Illustrations;

const Illustration = (props) => {

    const [expandIllustration, setExpandIllustration] = useState(false);
    const [currentIllustration, setCurrentIllustration] = useState(0);

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
        <div className='Illustration'>
            <button className='header-btn' onClick={() => setExpandIllustration(!expandIllustration)}>
                <h1>Illustration {expandIllustration ? '▲' : '▼'}</h1>
            </button>
            <div className={expandIllustration ? 'IllustrationContent' : 'hide'}>
                <BrowsingButtons previousItem={previousIllustration} nextItem={nextIllustration} />
                <img className='art' src={illustrations[currentIllustration].src} alt={illustrations[currentIllustration].alt} />
            </div>
        </div>
    );

};

export default Illustration;
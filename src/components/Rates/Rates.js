import React, {useState} from 'react';

import './Rates.css';

const Rates = (props) => {

    const [expandRates, setExpandRates] = useState(false);

    return (
        <div className='Rates'>
            <button className='header-btn' onClick={() => setExpandRates(!expandRates)}>
                <h1>Rates {expandRates ? '▲' : '▼'}</h1>
            </button>
            <div className={expandRates ? 'RatesContent' : 'hide'}>
                <h3>Please Ask For A Quote!</h3>
                <p><b>Article, In Depth (5k+ Words)</b></p>
                <p><b>Article, Long (1k to 5k Words)</b></p>
                <p><b>Article, Short (1k- Words)</b></p>
                <p><b>Documentation (All Types)</b></p>
                <p><b>Illustrations</b></p>
                <p><b>Logo / Brand Design</b></p>
                <p><b>Chart / Data Visualization</b></p>
                <p><b>Web Design / Development</b></p>
                <p className='lighter'><i>Rates are negotiable based on requirements, non-profit status, and other factors.</i></p>
            </div>
        </div>
    );

};

export default Rates;
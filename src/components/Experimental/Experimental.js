import React, {useState} from 'react';

import Experiments from '../../content/experiments';

import BrowsingButtons from '../BrowsingButtons';

import './Experimental.css';

const experiments = Experiments;

const Experimental = (props) => {

    //todo: turn all of this into a hook or something reusable
    const [expandExperimental, setExpandExperimental] = useState(false);
    const [currentExperiment, setCurrentExperiment] = useState(0);

    const [experimentState, setExperimentState] = useState({});

    const nextExperiment = () => {
        if (currentExperiment === experiments.length - 1) {
            setCurrentExperiment(0);
        }
        else {
            setCurrentExperiment(currentExperiment + 1);
        };
        setExperimentState({});
    };

    const previousExperiment = () => {
        if (currentExperiment === 0) {
            setCurrentExperiment(experiments.length - 1);
        }
        else {
            setCurrentExperiment(currentExperiment - 1);
        };
        setExperimentState({});
    };

    return (
        <div className='Experimental'>
            <button className='header-btn' onClick={() => setExpandExperimental(!expandExperimental)}>
                <h1 className='header-btn-text'>Experimental {expandExperimental ? '▲' : '▼'}</h1>
            </button>
            <div className={expandExperimental ? 'Experimental' : 'hide'}>
                <BrowsingButtons previousItem={previousExperiment} nextItem={nextExperiment} />
                {experiments[currentExperiment](props = {experimentState, setExperimentState})}
            </div>
        </div>
    );

};

export default Experimental;
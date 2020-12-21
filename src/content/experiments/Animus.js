import React, {useEffect, useState} from 'react';

import data from './Animus.json';

import './Animus.css';

// parse through parameters to adjust overall state
const selectChoice = (changes) => {



}

const Animus = (props) => {

    //const [currentPrompt, setCurrentPrompt] = useState(0);
    //const [attributes, setAttributes] = useState({});

    useEffect(() => {

        if (!props.experimentState.currentPrompt) {
            props.setExperimentState({currentPrompt: 0})
        }

    });

    return (
        <div className='animusContainer'>
            <h3 className='animusTitle'>{data.title}</h3>
            <h4 className='animusSubtitle'>{data.subtitle}</h4>
            {props.experimentState.currentPrompt && <p className='animusPrompt'>{data.prompts[props.experimentState.currentPrompt].title}</p>}
            {/*data.prompts[props.experimentState.currentPrompt].choices.forEach(item => {
                return <button key={item.id} className='animusChoice' onClick={() => selectChoice(data.prompts[props.experimentState.currentPrompt].changes)}>{item.text}</button>
            })*/}
            {/*console.log(props)*/}
            
        </div>
    );

};

export default Animus;
import React from 'react';

import DesertTrees from '../images/DesertTrees.svg';
import AngryFace from '../images/angry_face.svg';
import MonkeyPaw from '../images/MonkeyPaw.svg';
import CPU from '../images/cpu.svg';
import SquareThinker from '../images/SquareThinker.svg';
import ChickenLaptop from '../images/ChickenLaptop.svg';

const Art = (props) => {

    return (
        <div>
            <img className='art' src={SquareThinker} alt='Square Thinker Emoji'/>
            <img className='art' src={AngryFace} alt='Angry Face'/>
            <img className='art' src={CPU} alt='CPU In Hands'/>
            <img className='art' src={ChickenLaptop} alt='Chicken And Laptop'/>
            <img className='art' src={MonkeyPaw} alt='Monkey Paw'/>
            <img className='art' src={DesertTrees} alt='Desert Trees'/>
        </div>
    );

};

export default Art;
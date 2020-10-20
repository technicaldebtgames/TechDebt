import React from 'react';

import './Vaporwave.css';

const Vaporwave = (props) => {

    return (
        <article>
            <h3>A Vaporwave Div</h3>
            <div className='vapor-sunset-container'>
                <div className='vapor-sunset'></div>
            </div>
            <p className='dropcap'>Are you familiar with an artistic movement known as vaporwave? It's a chill musical aesthetic based around a lot of 80s synths and dreamy atmospheres.</p>
            <p>A lot of the artwork accompanying this musical style utilizes the feel of, well... <a href='https://m.media-amazon.com/images/M/MV5BMTlmMjJhNDctODg1NS00MzU1LTg3YzEtZGY2ZjYzOGE5OWZmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR108,0,630,1200_AL_.jpg'>TV shows</a> and movie posters from the 80s and early 90s. <a href='https://en.wikipedia.org/wiki/Cruis%27n_USA'>Videogames</a>. Neons and pastels. Sunsets. Gradients. <a href='https://i.pinimg.com/originals/e0/8f/a2/e08fa236feac30ca0f4827711db80e1e.png'>VHS artifacts</a>.</p>
            <p>It's a very unique aesthetic. If you get a chance, <a href='https://www.youtube.com/watch?v=SolEjKrcg4E'>give some of it a listen.</a></p>
            <p>Anyway, this is a vaporwave animation done only in CSS. No JS, just divs and keyframes.</p>
            <code className='code-block'>
                <b><i>html:</i></b><br/><br/>
                &#60;div className='vapor-sunset-container'&#62;<br/>
                &nbsp;&nbsp;&#60;div className='vapor-sunset'&#62;&#60;/div&#62;<br/>
                &#60;/div&#62;<br/><br/>
                <b><i>css:</i></b><br/><br/>
                .vapor-sunset-container &#123;<br/>
                &nbsp;&nbsp;margin: auto;<br/>
                &nbsp;&nbsp;padding: 3vw;<br/>
                &nbsp;&nbsp;width: 73%;<br/>
                &nbsp;&nbsp;background: linear-gradient(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0deg,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#EE3355 0%,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#EE4466 15%,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#442299 50%,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#221166 100%<br/>
                &nbsp;&nbsp;);<br/>
                &#125;<br/><br/>
                .vapor-sunset &#123;<br/>
                &nbsp;&nbsp;margin: auto;<br/>
                &nbsp;&nbsp;width: 40vw;<br/>
                &nbsp;&nbsp;height: 40vw;<br/>
                &nbsp;&nbsp;border-radius: 20vw;<br/>
                &nbsp;&nbsp;position: relative;<br/>
                &nbsp;&nbsp;overflow: hidden;<br/>
                &#125;<br/><br/>
                .vapor-sunset::before &#123;<br/>
                &nbsp;&nbsp;content: "";<br/>
                &nbsp;&nbsp;display: block;<br/>
                &nbsp;&nbsp;top: 0;<br/>
                &nbsp;&nbsp;height: 50%;<br/>
                &nbsp;&nbsp;background: linear-gradient(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0deg,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#221166 0%,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#441166 15%,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#442299 51%,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#EE4466 100%<br/>
                &nbsp;&nbsp;);<br/>
                &nbsp;&nbsp;background-size: 40vw 40vw;<br/>
                &nbsp;&nbsp;width: 100%;<br/>
                &#125;<br/><br/>
                .vapor-sunset::after &#123;<br/>
                &nbsp;&nbsp;content: "";<br/>
                &nbsp;&nbsp;display: block;<br/>
                &nbsp;&nbsp;bottom: 0;<br/>
                &nbsp;&nbsp;width: 100%;<br/>
                &nbsp;&nbsp;height: 50%;<br/>
                &nbsp;&nbsp;background: linear-gradient(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0deg,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#EE3355 0%,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#EE3355 12.5%,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#5533AA 30%,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#442299 49%,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#EE3355 100%<br/>
                &nbsp;&nbsp;);<br/>
                &nbsp;&nbsp;background-size: 40vw 40vw;<br/>
                &nbsp;&nbsp;background-position: bottom center;<br/>
                &nbsp;&nbsp;clip-path: polygon(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 -20vw, 100% -20vw, 100% -20.5vw, 0 -20.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 -18vw, 100% -18vw, 100% -18.5vw, 0 -18.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 -16vw, 100% -16vw, 100% -16.5vw, 0 -16.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 -14vw, 100% -14vw, 100% -14.5vw, 0 -14.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 -12vw, 100% -12vw, 100% -12.5vw, 0 -12.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 -10vw, 100% -10vw, 100% -10.5vw, 0 -10.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 -8vw, 100% -8vw, 100% -8.5vw, 0 -8.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 -6vw, 100% -6vw, 100% -6.5vw, 0 -6.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 -4vw, 100% -4vw, 100% -4.5vw, 0 -4.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 -2vw, 100% -2vw, 100% -2.5vw, 0 -2.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 0, 100% 0, 100% -.5vw, 0 -.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 0, 100% 0, 100% .5vw, 0 .5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 2vw, 100% 2vw, 100% 2.5vw, 0 2.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 4vw, 100% 4vw, 100% 4.5vw, 0 4.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 6vw, 100% 6vw, 100% 6.5vw, 0 6.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 8vw, 100% 8vw, 100% 8.5vw, 0 8.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 10vw, 100% 10vw, 100% 10.5vw, 0 10.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 12vw, 100% 12vw, 100% 12.5vw, 0 12.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 14vw, 100% 14vw, 100% 14.5vw, 0 14.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 16vw, 100% 16vw, 100% 16.5vw, 0 16.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0 18vw, 100% 18vw, 100% 18.5vw, 0 18.5vw);<br/>
                &nbsp;&nbsp;animation: vapor-sunset 25s<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cubic-bezier(0.25, 0.30, 0.20, 0.25) infinite;<br/>
                &#125;<br/><br/>
                @keyframes vapor-sunset &#123;<br/>
                &nbsp;&nbsp;to &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 0, 100% 0, 100% .5vw, 0 .5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 2vw, 100% 2vw, 100% 2.5vw, 0 2.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 4vw, 100% 4vw, 100% 4.5vw, 0 4.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 6vw, 100% 6vw, 100% 6.5vw, 0 6.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 8vw, 100% 8vw, 100% 8.5vw, 0 8.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 10vw, 100% 10vw, 100% 10.5vw, 0 10.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 12vw, 100% 12vw, 100% 12.5vw, 0 12.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 14vw, 100% 14vw, 100% 14.5vw, 0 14.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 16vw, 100% 16vw, 100% 16.5vw, 0 16.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 18vw, 100% 18vw, 100% 18.5vw, 0 18.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 20vw, 100% 20vw, 100% 20vw, 0 20vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 22vw, 100% 22vw, 100% 22.5vw, 0 22.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 24vw, 100% 24vw, 100% 24.5vw, 0 24.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 26vw, 100% 26vw, 100% 26.5vw, 0 26.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 28vw, 100% 28vw, 100% 28.5vw, 0 28.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 30vw, 100% 30vw, 100% 30.5vw, 0 30.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 32vw, 100% 32vw, 100% 32.5vw, 0 32.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 34vw, 100% 34vw, 100% 34.5vw, 0 34.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 36vw, 100% 36vw, 100% 36.5vw, 0 36.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 38vw, 100% 38vw, 100% 38.5vw, 0 38.5vw,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 40vw, 100% 40vw, 100% 40.5vw, 0 40.5vw<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
            </code>
        </article>
        
    );

};

export default Vaporwave;
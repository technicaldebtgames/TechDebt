import React from 'react';

import './GlitchText.css';

const GlitchText = (props) => {

    return (
        <article>
            <h3>Glitch Text? In MY Browser?!</h3>
            <p>It's more likely than you think!</p>
            <span className='glitch'>
                <span aria-hidden='true'>Glitch text</span>
                Glitch text
                <span aria-hidden='true'>Glitch text</span>
            </span>
            <p>This is a glitch text effect. It uses some staggered animations and <a href='https://bennettfeely.com/clippy/'>clip-paths</a> on span text to simulate that "glitchy" feel of broken text and smeared color palettes. It's actually very straight-forward - the vast majority of the CSS for it is just animation values that move stuff around. You can easily customize it to match your project.</p>
            <p>Due to how accurate certain values need to be, <a href='https://css-tricks.com/specifics-on-css-specificity/'>specificity</a> is a big issue with this. Depending on your implementation, you might find giving some properties the <a href='https://www.smashingmagazine.com/2010/11/the-important-css-declaration-how-and-when-to-use-it/'>!important</a> rule to be incredibly useful.</p>
            <p>(It's worth noting that <i>usually</i> the <b>!important</b> rule is a <a href='https://refactoring.guru/refactoring/smells'>code smell</a>, but if you use it responsibly it can be very helpful. Trying to get styles like this glitch text to work is probably a good example of responsible use of the rule.)</p>
            <p>Check out the code below to see how it's done:</p>
            <code className='code-block'>
                <b><i>html:</i></b><br/><br/>
                &#60;span className='glitch'&#62;<br/>&nbsp;&nbsp;&#60;span aria-hidden='true'&#62;Glitch text&#60;/span&#62;<br/>&nbsp;&nbsp;Glitch text<br/>&nbsp;&nbsp;&#60;span aria-hidden='true'&#62;Glitch text&#60;/span&#62;<br/>&#60;/span&#62;<br/><br/>
                <b><i>css:</i></b><br/><br/>
                .glitch &#123;<br/>
                &nbsp;&nbsp;position: relative;<br/>
                &nbsp;&nbsp;margin: 1vw;<br/>
                &nbsp;&nbsp;font-size: 7.5vw;<br/>
                &nbsp;&nbsp;font-weight: 600;<br/>
                &nbsp;&nbsp;text-transform: uppercase;<br/>
                &nbsp;&nbsp;animation: glitch-color 2500ms infinite;<br/>
                &#125;<br/><br/>
                .glitch span &#123;<br/>
                &nbsp;&nbsp;position: absolute;<br/>
                &nbsp;&nbsp;margin: auto;<br/>
                &nbsp;&nbsp;top: 0;<br/>
                &nbsp;&nbsp;left: 0;<br/>
                &nbsp;&nbsp;bottom: 0;<br/>
                &nbsp;&nbsp;right: 0;<br/>
                &#125;<br/><br/>
                .glitch span:first-child &#123;<br/>
                &nbsp;&nbsp;animation: glitch-color 1750ms infinite;<br/>
                &nbsp;&nbsp;animation: glitch-clip-a 850ms infinite;<br/>
                &#125;<br/><br/>
                .glitch span:last-child &#123;<br/>
                &nbsp;&nbsp;animation: glitch-color 1300ms infinite;<br/>
                &nbsp;&nbsp;animation: glitch-clip-b 1030ms infinite;<br/>
                &#125;<br/><br/>
                @keyframes glitch-color &#123;<br/>
                &nbsp;&nbsp;0% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.15vw -0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.095vw 0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.15vw 0.095vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;19% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.15vw -0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.095vw 0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.15vw 0.095vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;20% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.095vw -0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.15vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.095vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;34% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.095vw -0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.15vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.095vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;35% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: 0.15vw 0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw -0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw -0.095vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;59% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: 0.15vw 0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw -0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw -0.095vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;60% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.15vw 0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.095vw -0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;74% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.15vw 0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.095vw -0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;75% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.095vw -0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.15vw -0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;84% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.095vw -0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.15vw -0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;85% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: 0.095vw -0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;99% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: 0.095vw -0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;100% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.15vw -0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.095vw 0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;0.15vw 0.095vw 0 rgba(255, 0, 0, 0.8);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;<br/><br/>
                @keyframes glitch-clip-a &#123;<br/>
                &nbsp;&nbsp;0% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 70%, 0 30%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, 0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;34% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 70%, 0 30%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, 0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;35% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 60%, 0 40%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, 0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;54% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 60%, 0 40%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, 0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;55% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 40%, 0 70%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, -0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;89% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 40%, 0 70%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, -0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;90% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 80%, 0 20%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, -0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;99% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 80%, 0 20%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, -0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;100% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 70%, 0 30%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, 0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;<br/><br/>
                @keyframes glitch-clip-b &#123;<br/>
                &nbsp;&nbsp;0% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 40%, 100% 45%, 100% 100%, 0 100%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, -0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;14% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 40%, 100% 45%, 100% 100%, 0 100%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, -0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;15% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 60%, 100% 25%, 100% 100%, 0 100%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, 0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;44% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 60%, 100% 25%, 100% 100%, 0 100%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, 0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;45% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 30%, 100% 75%, 100% 100%, 0 100%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, -0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;79% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 30%, 100% 75%, 100% 100%, 0 100%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, -0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;80% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 80%, 100% 55%, 100% 100%, 0 100%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, 0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;99% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 80%, 100% 55%, 100% 100%, 0 100%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, 0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;100% &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 40%, 100% 45%, 100% 100%, 0 100%);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, -0.1vw);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
            </code>
        </article>
    );

};

export default GlitchText;
/* eslint-disable react/jsx-no-comment-textnodes */
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
            <p className='dropcap'>This is a browser-agnostic glitch text effect using only CSS. It uses some staggered <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations'>animations</a> and <a href='https://bennettfeely.com/clippy/'>clip-paths</a> on span text to simulate that "glitchy" feel of broken text and smeared color palettes. It's actually very straight-forward - the vast majority of the CSS for it is just animation values that move stuff around. You can easily customize it to match your project.</p>
            <p>Due to how accurate certain values need to be in order for this style to pull off what it is trying to do, <a href='https://css-tricks.com/specifics-on-css-specificity/'>specificity</a> is a big issue. Depending on your implementation, you might find that giving some properties the <a href='https://www.smashingmagazine.com/2010/11/the-important-css-declaration-how-and-when-to-use-it/'>!important</a> rule is an incredibly helpful fix.</p>
            <p>(It's worth noting that <i>usually</i> the <b>!important</b> rule is a CSS <a href='https://refactoring.guru/refactoring/smells'>code smell</a>, but if you use it responsibly it can be very helpful. Trying to get styles like this glitch text to work is probably a good example of responsible use of the rule.)</p>
            <p>You might even use it in a different context and with more appropriate colors to simulate a seasonal animated message. (Or a MySpace page from back in the day.)</p>
            <span className='glitch-red'>
                <span aria-hidden='true'>BOO!</span>
                BOO!
                <span aria-hidden='true'>BOO!</span>
            </span>
            <p>Check out the code below to see how it's done.</p>
            <code className='code-block'>
                <b><i>html:</i></b><br/><br/>
                &#60;span className='glitch'&#62;<br/>&nbsp;&nbsp;&#60;span aria-hidden='true'&#62;Glitch text&#60;/span&#62;<br/>&nbsp;&nbsp;Glitch text<br/>&nbsp;&nbsp;&#60;span aria-hidden='true'&#62;Glitch text&#60;/span&#62;<br/>&#60;/span&#62;<br/><br/>
                <b><i>css:</i></b><br/><br/>
                .glitch &#123;<br/>
                &nbsp;&nbsp;/* Add font-family, font-size, etc. properties here as needed */<br/>
                &nbsp;&nbsp;position: relative;<br/>
                &nbsp;&nbsp;color: black;<br/>
                &nbsp;&nbsp;text-transform: uppercase;<br/>
                &nbsp;&nbsp;animation: glitch-color 2500ms infinite;<br/>
                &#125;<br/><br/>
                /* Depending on your styles, you might need to adjust top as well as left here. It's a case-by-case basis! */<br/>
                .glitch span &#123;<br/>
                &nbsp;&nbsp;position: absolute;<br/>
                &nbsp;&nbsp;left: 0;<br/>
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
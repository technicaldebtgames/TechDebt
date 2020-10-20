import React from 'react';

import './ImageText.css';

const ImageText = (props) => {

    return (
        <article>
            <h3>WhAt If ImAgE bUt TeXt?!1</h3>
            <p className='dropcap'>How about a nice CSS class (<i>or, two, I guess? Jeez I am already off the rails here...</i>) that lets you use an image to fill in text? It's a very eye-catching design. It <b>POPS</b>.</p>
            <div className='text-bg'>
                <p className='text-bg-p'>EXPLORE CSS</p>
            </div>
            <p>Looks nice, right? Well, this has MOST browser support, as far as I can tell. It DOESN'T have support in <i>Internet Explorer</i>. Yeah, that's right - remember Internet Explorer? When's the last time you used <b>THAT</b>? Oh, you <i>haven't used IE in years</i>? Yeah, well, neither have I!</p>
            <p>So, yeah... you <i>might</i> want to hold off on using this if you have a lot of IE users. You can always just create an image and use <b>that</b> instead. That's the tried-and-true method of making sure eye-catching graphics remain eye-catching, <i>regardless of browser compatibility</i>.</p>
            <p>(That's the secret, really. I know I've been writing some crazy CSS styles that do weird things, but I really am just doing it for fun. If you want to browser-proof your design, you <i>use images</i>. I really like SVGs because <i>I am insane and like to click a lot just to make graphics</i>, but raster images are the safe, universally-usable, and <i>actually correct</i> choice.)</p>
            <p>Anyway, what's going on here?</p>
            <p>In this example, I have text within a div, that has a background image, and then I use the CSS property mix-blend-mode to show the difference between the two - in this case, whatever the lighter value is at any point in their overlap.</p>
            <p>The reason that the text looks like it has been cut out of the image is because of that difference in color values. The text itself is black. The p element that has the text has a background-color of #EEE. The pure black text will always show the image that it is overlapping with, and the background-color of #EEE will always be lighter than the image and show as well. And <b>THAT</b> is how you get a CSS style that looks like a cut-out of an image... unless you're on IE, in which case, <i>why are you on IE, anyway?</i></p>
            <code className='code-block'>
                <b><i>html:</i></b><br/><br/>
                &#60;div className='text-bg'&#62;<br/>
                &nbsp;&nbsp;&#60;p className='text-bg-p'&#62;EXPLORE CSS&#60;/p&#62;<br/>
                &#60;/div&#62;<br/><br/>
                <b><i>css:</i></b><br/><br/>
                .text-bg &#123;<br/><br/>
                &nbsp;&nbsp;margin: 0 auto;<br/>
                &nbsp;&nbsp;background: url(space.jpg);<br/>
                &nbsp;&nbsp;width: 70vw;<br/>
                &nbsp;&nbsp;max-width: 700px;<br/>
                &nbsp;&nbsp;height: 12vw;<br/>
                &nbsp;&nbsp;max-height: 120px;<br/><br/>
                &#125;<br/><br/>
                .text-bg-p &#123;<br/><br/>
                &nbsp;&nbsp;padding: 3vw 0 5vw 0;<br/>
                &nbsp;&nbsp;font-family: 'Ubuntu Mono', monospace;<br/>
                &nbsp;&nbsp;font-size: 15vw;<br/>
                &nbsp;&nbsp;font-weight: 600;<br/>
                &nbsp;&nbsp;letter-spacing: -0.15em;<br/>
                &nbsp;&nbsp;background-color: #EEE;<br/>
                &nbsp;&nbsp;mix-blend-mode: lighten;<br/><br/>
                &#125;
            </code>
        </article>
    );

};

export default ImageText;
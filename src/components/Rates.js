import React from 'react';

const Rates = (props) => {

    return (
        <div>
            <h3>Writing / Editing</h3>
            <p><b>Blog, long (1k+):</b> $0.30/word</p>
            <p><b>Blog, short (1k or less):</b> $0.20/word</p>
            <p><b>Documentation (all types):</b> By quote.</p>
            <p className='lighter'><i>Rates are negotiable based on requirements. Per-article or retainer rates may be available.</i></p>
            <h3>Illustration / Design</h3>
            <p><b>Illustrations:</b> $50-$500</p>
            <p><b>Logo / brand design:</b> $500-$5,000</p>
            <p><b>Chart / data visualization:</b> By quote.</p>
            <p><b>Web design / development:</b> By quote.</p>
            <p className='lighter'><i>Rates are negotiable based on requirements.</i></p>
        </div>
    );

};

export default Rates;
import React from 'react';

import Section from '../Section/Section';

const giphyLinks = [
    'https://giphy.com/embed/feO9ESQit0QM0',
    'https://giphy.com/embed/pFwRzOLfuGHok',
    'https://giphy.com/embed/8zFzUSzVZr7X2',
    'https://giphy.com/embed/9J7tdYltWyXIY',
    'https://giphy.com/embed/nKN7E76a27Uek',
    'https://giphy.com/embed/3owypf6HrM3J7UTvAA',
    'https://giphy.com/embed/3oGRFvUEbJdLWlawLu',
    'https://giphy.com/embed/l4KicIPQmXJFkvgwo',
    'https://giphy.com/embed/A7ucRcPh48EEg',
    'https://giphy.com/embed/bswGDO7Rh1ONO',
    'https://giphy.com/embed/DdFJCeDKpcYRa',
];

export default function() {
    const randomNumber = Math.floor(Math.random() * 11);
    return (
        <React.Fragment>
            <Section textLength superTop>
                <h2 style={{ textAlign: 'center' }}>Whoopsie - 404</h2>
                <p style={{ textAlign: 'center' }}>
                    Not the page you were looking for? Try the{` `}
                    <a href="/">Homepage</a>
                </p>
                <div
                    style={{
                        width: '100%',
                        height: 0,
                        paddingBottom: '62%',
                        position: 'relative',
                    }}
                >
                    <iframe
                        src={giphyLinks[randomNumber]}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute' }}
                        frameBorder="0"
                        allowFullScreen
                        title="404"
                    />
                </div>
            </Section>
        </React.Fragment>
    );
}

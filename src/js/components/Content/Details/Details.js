import React from 'react';

import Section from '../../Section/Section';

export default function() {
    return (
        <React.Fragment>
            <Section textLength superTop>
                <h2>Children</h2>
                <p>
                    In order to allow all guests, including parents, an evening
                    of relaxation we have chosen for our wedding day to be an
                    adult-only occasion. We hope this advance notice means you
                    are still able to share our big day and will enjoy having
                    the evening off!
                </p>
            </Section>
            <Section textLength>
                <h2>Gifts</h2>
                <p>
                    Your presence at our wedding is gift enough, but if you do wish
                    to make a gesture, a contribution towards our dream honeymoon 
                    would be much appreciated.
                </p>
            </Section>
        </React.Fragment>
    );
}

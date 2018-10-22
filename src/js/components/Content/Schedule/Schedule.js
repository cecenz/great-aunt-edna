import React from 'react';

import Section from '../../Section/Section';
import Grid from '../../Grid/Grid';
import Profile from '../../Profile/Profile';

export default function() {
    return (
        <React.Fragment>
            <Section textLength superTop>
                <h2>Schedule</h2>
                <p>
                    We're still working on the finer details of the day. But not
                    to worry, we'll email everyone when this is available.
                </p>
                <p>
                    Don't forget to keep the Sunday free if you can, as we will
                    be hosting something small the day after too.
                </p>
            </Section>
            <Section textLength>
                <h2>Bridal Party</h2>
                <Grid columns="2" rowSpacing columnSpacing>
                    <Profile
                        name="Melissa Matthews"
                        profileRole="Maid of Honour"
                        imageSrc="/assets/images/missy.png"
                    />
                    <Profile
                        name="Ben McKeown"
                        profileRole="Best Man"
                        imageSrc="/assets/images/ben1.png"
                    />
                    <Profile
                        name="Sally Taylor"
                        profileRole="Bridesmaid"
                        imageSrc="/assets/images/sally.png"
                    />

                    <Profile
                        name="Matthew Lister"
                        profileRole="Groomsman"
                        imageSrc="/assets/images/stiff1.png"
                    />
                </Grid>
            </Section>
        </React.Fragment>
    );
}

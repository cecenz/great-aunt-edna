import React, { Component } from 'react';
import axios from 'axios';
import Section from '../Section/Section';
import Grid from '../Grid/Grid';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        axios
            .get(`https://claire-and-matt.firebaseio.com/guests.json`)
            .then(response => {
                this.setState({ data: response.data });
            });
    }

    render() {
        if (this.state.data) {
            return (
                <Section>
                    <Grid columns="2" rowSpacing columnSpacing>
                        {Object.values(this.state.data).map(item => {
                            const id = item.displayName
                                .replace(' ', '-')
                                .toLowerCase();
                            return (
                                <div key={id}>
                                    <h4>{item.displayName}</h4>
                                    <p>
                                        Submitted:{' '}
                                        {item.submitted ? 'Yes' : 'No'}
                                    </p>
                                    {item.contactDetails.email && (
                                        <p>
                                            Email: {item.contactDetails.email}
                                        </p>
                                    )}
                                    {item.contactDetails.phone && (
                                        <p>
                                            Contact Number:{' '}
                                            {item.contactDetails.phone}
                                        </p>
                                    )}
                                    {item.contactDetails.address && (
                                        <p>
                                            Address:{' '}
                                            {item.contactDetails.address}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </Grid>
                </Section>
            );
        }
        return null;
    }
}

export default Dashboard;

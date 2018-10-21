import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import axios from 'axios';

import Form from '../../Form/Form.container';

import Section from '../../Section/Section';
import Summary from '../../Summary/Summary';

class Rsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rsvpValue: '',
            guest: {
                valid: false,
                data: {},
                id: undefined,
            },
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitSuccess = this.submitSuccess.bind(this);
    }

    handleSubmit(e, value) {
        e.preventDefault();
        if (value) {
            axios
                .get(
                    `https://great-aunt-edna-2.firebaseio.com/guests/${value}.json`,
                )
                .then(response => {
                    if (response.data) {
                        return this.setState(prevState => ({
                            guest: {
                                ...prevState.guest,
                                valid: true,
                                data: response.data,
                                id: value,
                            },
                        }));
                    } else {
                        console.log('failed TODO');
                    }
                });
        }
    }
    submitSuccess(data) {
        this.setState(prevState => ({
            guest: {
                ...prevState.guest,
                data,
            },
        }));
    }

    render() {
        const guest = this.state.guest;
        const guestId = this.state.guest.id;
        const guestData = this.state.guest.data;
        if (guestData.submitted) {
            return (
                <Switch>
                    <Redirect
                        exact
                        from="/rsvp"
                        to={`/rsvp/${guestId}/summary`}
                    />
                    <Route
                        path={`/rsvp/${guestId}/summary`}
                        render={() => (
                            <Summary data={guestData} name={guestId} />
                        )}
                    />
                </Switch>
            );
        } else if (guest.valid) {
            return (
                <Switch>
                    <Redirect exact from="/rsvp" to={`/rsvp/${guestId}/form`} />
                    <Route
                        path={`/rsvp/${guestId}/form`}
                        render={() => (
                            <Form
                                data={guestData}
                                name={guestId}
                                submitSuccess={this.submitSuccess}
                            />
                        )}
                    />
                </Switch>
            );
        } else {
            return (
                <React.Fragment>
                    <Section textLength superTop>
                        <h2>RSVP</h2>
                        <p>
                            Please enter your unique code to RSVP or view your
                            RSVP deatils
                        </p>
                        <form action="GET">
                            <input
                                onChange={e =>
                                    this.setState({
                                        rsvpValue: e.target.value,
                                    })
                                }
                                type="text"
                                value={this.state.rsvpValue}
                            />
                            <button
                                onClick={e =>
                                    this.handleSubmit(e, this.state.rsvpValue)
                                }
                            >
                                Enter
                            </button>
                        </form>
                    </Section>
                </React.Fragment>
            );
        }
    }
}

export default Rsvp;

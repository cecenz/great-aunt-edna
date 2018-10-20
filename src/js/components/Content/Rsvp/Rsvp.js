import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import axios from 'axios';

import Form from '../../Form/Form.container';

import Section from '../../Section/Section';

class Rsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rsvpValue: '',
            guest: {
                valid: false,
                data: undefined,
                id: undefined,
            },
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
                        return this.setState({
                            guest: {
                                valid: true,
                                data: response.data,
                                id: value,
                            },
                        });
                    } else {
                        console.log('failed');
                    }
                });
        }
    }
    render() {
        console.log(this.props);
        if (this.state.guest.valid) {
            return (
                <Switch>
                    <Redirect
                        exact
                        from="/rsvp"
                        to={`/rsvp/${this.state.guest.id}/form`}
                    />
                    <Route
                        path={`/rsvp/${this.state.guest.id}/form`}
                        render={() => (
                            <Form
                                data={this.state.guest.data}
                                name={this.state.guest.data.displayName}
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

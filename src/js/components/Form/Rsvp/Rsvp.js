import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import axios from 'axios';

import Form from '../Form.container';

import Section from '../../Section/Section';
import Summary from '../../Summary/Summary';

import '../form.css';

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
            rsvpIdError: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitSuccess = this.submitSuccess.bind(this);
    }

    handleSubmit(e, value) {
        e.preventDefault();
        if (value) {
            const formattedValue = value.toLowerCase();
            axios
                .get(
                    `https://great-aunt-edna-2.firebaseio.com/guests/${formattedValue}.json`,
                )
                .then(response => {
                    if (response.data) {
                        return this.setState(prevState => ({
                            guest: {
                                ...prevState.guest,
                                valid: true,
                                data: response.data,
                                id: formattedValue,
                            },
                        }));
                    } else {
                        return this.setState({ rsvpIdError: true });
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
                            submitted details
                        </p>
                        <form action="GET">
                            <div className="form__group--s">
                                <div className="form__input--text">
                                    <input
                                        className="form__input"
                                        onChange={e =>
                                            this.setState({
                                                rsvpValue: e.target.value,
                                            })
                                        }
                                        type="text"
                                        value={this.state.rsvpValue}
                                    />
                                </div>
                                {this.state.rsvpIdError && (
                                    <p className="form__error-message">
                                        That code does not exist. Please check
                                        your email and try again
                                    </p>
                                )}
                            </div>
                            <button
                                className="form__button"
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

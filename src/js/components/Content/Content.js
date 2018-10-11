import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { Route } from 'react-router-dom';

import GUEST_LIST from '../../utils/var';
import Form from '../Form/Form.container';
import Details from './Details/Details';
import Schedule from './Schedule/Schedule';
import Location from './Location/Location';
import Landing from './Landing/Landing';
import Summary from '../Summary/Summary';
import Header from '../Header/Header';

import './content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loaded: false,
        };
        this.submitSuccess = this.submitSuccess.bind(this);
        this.resetLoadHandler = this.resetLoadHandler.bind(this);
    }

    componentDidMount() {
        const { name } = this.props.match.params;
        if (name) {
            axios
                .get(
                    `https://great-aunt-edna-2.firebaseio.com/guests/${name}.json`,
                )
                .then(response => {
                    this.setState({ data: response.data });
                });
        }
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 0);
    }

    resetLoadHandler() {
        this.setState({ loaded: false });
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 250);
    }

    submitSuccess(data) {
        this.setState({ data });
    }

    render() {
        const url = this.props.match.url;
        const name = this.props.match.params.name;
        const guestData = this.state.data;

        return (
            <React.Fragment>
                <Route exact path={`${url}`} component={Landing} />
                <Header url={url} loaded={this.resetLoadHandler} />
                <div
                    className={classNames('content', {
                        'content--loaded': this.state.loaded,
                        'content--pre-loaded': !this.state.loaded,
                    })}
                >
                    <Route path={`${url}/schedule`} component={Schedule} />
                    <Route path={`${url}/location`} component={Location} />
                    <Route path={`${url}/details`} component={Details} />
                    {guestData &&
                        (guestData.submitted ? (
                            <Route
                                path={`${url}/rsvp`}
                                render={() => (
                                    <Summary data={guestData} name={name} />
                                )}
                            />
                        ) : (
                            <Route
                                path={`${url}/rsvp`}
                                render={() => (
                                    <Form
                                        data={guestData}
                                        name={name}
                                        submitSuccess={this.submitSuccess}
                                    />
                                )}
                            />
                        ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Content;

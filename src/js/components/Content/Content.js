import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { Route } from 'react-router-dom';

// import GUEST_LIST from '../../utils/var';
import Form from '../Form/Form.container';
import Details from './Details/Details';
import Schedule from './Schedule/Schedule';
import Location from './Location/Location';
// import Landing from './Landing/Landing';
import Rsvp from './Rsvp/Rsvp';
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
        // console.log('component mounted');
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

        // console.log('guestData', this.state.data);
        // console.log('this.props.match.params', this.props.match.params);

        return (
            <React.Fragment>
                <Header
                    url={url}
                    loaded={this.resetLoadHandler}
                    isShowLogo={true}
                />
                <div
                    className={classNames('content', {
                        'content--loaded': this.state.loaded,
                        'content--pre-loaded': !this.state.loaded,
                    })}
                >
                    <Route path="/schedule" component={Schedule} />
                    <Route path="/location" component={Location} />
                    <Route path="/details" component={Details} />

                    {guestData ? (
                        guestData.submitted ? (
                            <Route
                                path="/rsvp/:name/summary"
                                render={() => (
                                    <Summary data={guestData} name={name} />
                                )}
                            />
                        ) : (
                            <Route
                                path="/rsvp/:name/form"
                                render={() => (
                                    <Form
                                        data={guestData}
                                        name={name}
                                        submitSuccess={this.submitSuccess}
                                    />
                                )}
                            />
                        )
                    ) : (
                        <Route path="/rsvp" component={Rsvp} data={guestData} />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Content;

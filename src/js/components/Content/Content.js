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
            loaded: false,
        };

        this.resetLoadHandler = this.resetLoadHandler.bind(this);
    }

    componentDidMount() {
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

    render() {
        const url = this.props.match.url;
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
                    <Route path="/rsvp" component={Rsvp} />
                </div>
            </React.Fragment>
        );
    }
}

export default Content;

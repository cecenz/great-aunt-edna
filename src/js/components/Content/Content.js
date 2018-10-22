import React, { Component } from 'react';
import classNames from 'classnames';
import { Route, Switch } from 'react-router-dom';

import Details from './Details/Details';
import Schedule from './Schedule/Schedule';
import Location from './Location/Location';
import Rsvp from '../Form/Rsvp/Rsvp';
import Header from '../Header/Header';
import NoMatch from '../NoMatch/NoMatch';

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
                    <Switch>
                        <Route path="/schedule" component={Schedule} />
                        <Route path="/location" component={Location} />
                        <Route path="/details" component={Details} />
                        <Route path="/rsvp" component={Rsvp} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default Content;

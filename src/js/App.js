import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Content/Landing/Landing';
import Content from './components/Content/Content';
import Dashboard from './components/Dashboard/Dashboard';
import '../../src/App.css';

export default function() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/brooksidelucky11" component={Dashboard} />
                <Route exact path="/rsvp/:name/form" component={Content} />
                <Route component={Content} />
            </Switch>
        </div>
    );
}

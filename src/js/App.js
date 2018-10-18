import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Content from './components/Content/Content';
import Dashboard from './components/Dashboard/Dashboard';
import '../../src/App.css';

export default function() {
    return (
        <div className="app">
            <Switch>
                <Route path="/brooksidelucky11" component={Dashboard} />
                <Route path="/" component={Content} />
            </Switch>
        </div>
    );
}

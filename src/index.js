import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from '../src/js/App';
import { history } from './js/utils/var';

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root'),
);

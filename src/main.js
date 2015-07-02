import React from 'react';
import App from './components/App';

let issues = require('./issues.json');

React.render(<App issues={issues} />, document.getElementById('App'));

// Module imports to load in dependencies
// Uses default imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

ReactDOM.render(
    <App url="//localhost:3000/api/comments" pollInterval={2000} />,
    document.getElementById('app')
);

// Module imports to load in dependencies
// Uses both default & named imports
import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';

render(
    <App url="//localhost:3000/api/comments" pollInterval={2000} />,
    document.getElementById('app')
);

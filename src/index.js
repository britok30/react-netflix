import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { GlobalStyles } from './globalStyles';
import App from './App';

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById('root')
);

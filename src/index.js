import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { injectGlobal } from 'styled-components';
import typography from './typography';
import reset from 'styled-reset';

injectGlobal`
    ${reset}
	${typography}
`;

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

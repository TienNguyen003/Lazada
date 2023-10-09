import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './component/globalstyle/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <GlobalStyles>
        <App />
    </GlobalStyles>,
    // </React.StrictMode>,
);

reportWebVitals();

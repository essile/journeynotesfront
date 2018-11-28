import React from 'react';
import {withNamespaces} from 'react-i18next';
import App from './App';

function Translation ({t}) {
    return (
        <App/>
    )
}

export default withNamespaces()(Translation);

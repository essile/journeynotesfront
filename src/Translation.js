import React from 'react';
import {withNamespaces} from 'react-i18next';
import App from './App';

function Translation ({t}) {
    return (
        <App/>
    )
}

export default withNamespaces()(Translation);

// Translation happens in these files:
// - languageFiles = all translations
// - App.js = function ChangeLanguage(), responsible of the language options
// - This one is between index and app making the whole thing happen
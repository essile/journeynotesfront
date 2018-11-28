import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import TranslationEN from './languageFiles/TranslationEN';
import TranslationSE from './languageFiles/TranslationSE';
import TranslationFI from './languageFiles/TranslationFI';

const resources = {
    en: {
        translation: TranslationEN
    },
    fi: {
        translation: TranslationFI
    },
    se: {
        translation: TranslationSE
    }
};

i18n
    .use(reactI18nextModule)
    .init({
        resources,
        lng: localStorage.getItem("language"),
        // lng: "cimode", // this can be used if you want to see the labels
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: false,
            withRef: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    });

export default i18n;
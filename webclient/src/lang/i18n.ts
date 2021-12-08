import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './langs/en.json';
import pt from './langs/pt.json';

console.log(en);

const resources = {
    en: en,
    pt: pt
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false
        }
    }).then(() => {});

i18n.changeLanguage(navigator.language).then(() => {})

export default i18n;
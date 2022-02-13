import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            name : 'Name',
            countryCode : 'Country Code',
            country : 'Country',
            confirmed : 'Confirmed',
            recovered : 'Recovered',
            death : 'Death',
            ascDesc : 'ASC/DESC',
            asc : 'Ascending',
            desc : 'Descending',
            search : 'Search...'
        }
    },
    ka: {
        translation: {
            name : 'სახელი',
            countryCode : 'ქვეყნის კოდი',
            country : 'ქვეყანა',
            confirmed : 'დადასტურებული',
            recovered : 'გამოჯანრმთელებული',
            death : 'გარდაცვლილი',
            ascDesc : 'ზრდ/კლბ',
            asc : 'ზრდადობით',
            desc : 'კლებადობით',
            search : 'ძებნა...'
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        detection: {
            order: ['path'],
            lookupFromPathIndex: 0,
            checkWhitelist: true
        },
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;

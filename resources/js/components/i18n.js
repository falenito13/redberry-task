import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
            search : 'Search...',
            logout : 'Log out',
            english : 'English',
            georgian : 'Georgian',
            statistic : 'Statistic of',
            fill_required_fields : 'Fill in required fields to sign in',
            email : 'Email',
            password : 'Password',
            login : 'Log In'
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
            search : 'ძებნა...',
            logout : 'გამოსვლა',
            english : 'ინგლისური',
            georgian : 'ქართული',
            statistic : 'სტატისტიკა',
            fill_required_fields : 'ავტორიზაციისთვის შეავსეთ მოცემული ველები',
            email : 'Email',
            password : 'პაროლი',
            login : 'შესვლა'
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        detection: {
            order: ['path'],
            lookupFromPathIndex: 0,
            checkWhitelist: true
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

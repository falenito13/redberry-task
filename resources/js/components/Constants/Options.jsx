import Select, {components} from "react-select";
import {useTranslation} from "react-i18next";

export function deathOptions() {
    const {t, i18n} = useTranslation();
    return [
        {label: t('death') + '' + t('ascDesc'), value: '', name: 'death'},
        {label: t('desc'), value: 'DESC', name: 'death'},
        {label: t('asc'), value: 'ASC', name: 'death'},
    ]
}

export function recoveredOptions() {
    const {t, i18n} = useTranslation();
    return [
        {label: t('recovered') + ' ' + t('ascDesc'), value: '', name: 'recovered'},
        {label: t('desc'), value: 'DESC', name: 'recovered'},
        {label: t('asc'), value: 'ASC', name: 'recovered'},
    ]
}

export function confirmedOptions() {
    const {t, i18n} = useTranslation();
    return [
        {label: t('confirmed') + ' ' + t('ascDesc'), value: '', name: 'confirmed'},
        {label: t('desc'), value: 'DESC', name: 'confirmed'},
        {label: t('asc'), value: 'ASC', name: 'confirmed'},
    ];
}

export const languageOptions = [
    {value: 'en', label: 'English'},
    {value: 'ka', label: 'Georgian'}
]




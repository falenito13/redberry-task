import React, {useEffect, useMemo, useState} from 'react'
import AxiosInstance from "../Hooks/AxiosInstance";
import {useNavigate, useParams} from "react-router-dom";
import Select from "react-select";
import {selectConfirmedStyles, selectRecoveredStyles, selectDeathStyles} from "../Styles/Select";
import {
    deathOptions,
    recoveredOptions,
    confirmedOptions,
} from "../Constants/Options";
import debounce from 'lodash.debounce'
import _ from 'lodash'
import {useTranslation} from 'react-i18next';
import CovidLogo from '../Assets/covid.png'

export default function Dashboard() {
    const {lang} = useParams();
    const {t, i18n} = useTranslation();
    const navigate = useNavigate()
    const [statisticDeath, setStatisticDeath] = useState();
    const [statisticConfirmed, setStatisticConfirmed] = useState();
    const [statisticRecovered, setStatisticRecovered] = useState();
    const [search, setSearch] = useState({});
    const [statistics, setStatistics] = useState([]);
    const handleChange = (e) => {
        search[e.target.name] = e.target.value
        setSearch(search)
        AxiosInstance().get('/api/statistics', {
            params: {
                'search_keyword': search.search_keyword
            }
        }).then(response => {
            const statisticsArray = response.data.data
            setStatistics(statisticsArray)
        })
    }

    useEffect(() => {
        debouncedResults.cancel();
        AxiosInstance().get('/api/statistics').then(response => {
            const statisticsArray = response.data.data
            setStatistics(statisticsArray)
        })
        AxiosInstance().get('/api/statistics/summary').then(response => {
            setStatisticConfirmed(response.data.sum_of_confirmed)
            setStatisticRecovered(response.data.sum_of_recovered)
            setStatisticDeath(response.data.sum_of_death)
        })
    }, [])
    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 300);
    }, []);


    const filterStatistics = (event) => {
        search[event.name] = event.value
        setSearch(search)
        AxiosInstance().get('/api/statistics', {
            params: search
        }).then(response => {
            setStatistics(response.data.data)
        })
    }

    return (
        <>
            <div className="flex flex-col w-full">
                <h3 className={'text-2xl font-bold flex justify-center'}>{t('statistic')} COVID-19</h3>
                <div className={'flex items-center flex-col sm:flex-row sm:justify-center'}>
                    <div className={'max-w-md flex items-center ml-32'}>
                        <img src={CovidLogo} className={'outline-0 w-32 '}/>
                        <ul className={'list-disc'}>
                            <li className={'text-custom-green'}>{t('recovered')} : {statisticRecovered}</li>
                            <li className={'text-whitespace-nowrap text-custom-blue text-md'}>{t('confirmed')} : {statisticConfirmed}</li>
                            <li className={'text-custom-red'}>{t('death')} : {statisticDeath}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <div className={'flex flex-col m-4 md:flex-row items-center justify-between'}>
                                <div className={'flex'}>
                                    <Select options={recoveredOptions()} className={'mr-2'}
                                            id="recovered"
                                            styles={selectRecoveredStyles}
                                            onChange={filterStatistics}
                                            placeholder={t('recovered') + ' ' + t('ascDesc')}/>
                                    <Select options={confirmedOptions()} className={'mr-2'}
                                            id="confirmed"
                                            styles={selectConfirmedStyles}
                                            onChange={filterStatistics}
                                            placeholder={t('confirmed') + ' ' + t('ascDesc')}/>
                                    <Select options={deathOptions()}
                                            id="death"
                                            styles={selectDeathStyles}
                                            onChange={filterStatistics}
                                            placeholder={t('death') + ' ' + t('ascDesc')}/>
                                </div>
                                <div className={'flex my-8'}>
                                    <div
                                        className="input-icons flex py-1 border-2 rounded-xl border-blue-400 outline-none focus:border-green-400">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="w-8 h-6 ml-2 mr-2 text-blue-600"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                        <input type="text" name="search_keyword" className={'focus:outline-0 mr-2'}
                                               placeholder={t('search')} onChange={debouncedResults}/>
                                    </div>
                                </div>
                            </div>
                            <table className="w-1/6 px-2 sm:w-full divide-y divide-gray-200 table-auto">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">{t('country')}
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">{t('countryCode')}
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">{t('recovered')}
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">{t('confirmed')}
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">{t('death')}
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {statistics && statistics.map(statistic => {
                                    let countryNameByLanguage = JSON.parse(statistic.country.name)[lang]
                                    return (<tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{countryNameByLanguage}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{statistic.country.code}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{statistic.recovered}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{statistic.confirmed}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{statistic.death}</div>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

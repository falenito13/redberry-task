import React, {useEffect, useState} from 'react'
import AxiosInstance from "../Hooks/AxiosInstance";
import {useParams} from "react-router-dom";
import Select from "react-select";
import {selectConfirmedStyles, selectRecoveredStyles, selectDeathStyles} from "../Styles/Select";
import {DashboardDeathOptions, DashboardRecoveredOptions, DashboardConfirmedOptions} from "../Constants/Options";

export default function Dashboard() {
    const {lang} = useParams();
    const [statistics, setStatistics] = useState([]);
    useEffect(() => {
        AxiosInstance().get('/api/statistics').then(response => {
            const statisticsArray = response.data.data
            setStatistics(statisticsArray)
        })
    }, [])

    const filterStatistics = (event) => {
        const params = localStorage.getItem('filters') ? JSON.parse(localStorage.getItem('filters')) : {}
        params[event.name] = event.value
        localStorage.setItem('filters', JSON.stringify(params))
        AxiosInstance().get('/api/statistics', {
            params: JSON.parse(localStorage.getItem('filters'))
        }).then(response => {
            const statisticsArray = response.data.data
            setStatistics(statisticsArray)
        })
    }
    return (
        <>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country
                                        Code
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <Select options={DashboardConfirmedOptions} className={'pb-2'}
                                                id="confirmed"
                                                styles={selectConfirmedStyles}
                                                onChange={filterStatistics}
                                                placeholder={'Confirmed'}/>Confirmed
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <Select options={DashboardRecoveredOptions} className={'pb-2'}
                                                id="recovered"
                                                styles={selectRecoveredStyles}
                                                onChange={filterStatistics}
                                                placeholder={'Recovered'}/>Recovered
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <Select options={DashboardDeathOptions} className={'pb-2'}
                                                id="death"
                                                styles={selectDeathStyles}
                                                onChange={filterStatistics}
                                                placeholder={'Death'}/>Death
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
                                                <div className="text-sm text-gray-900">{statistic.confirmed}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{statistic.recovered}</div>
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

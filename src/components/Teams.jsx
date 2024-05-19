import Team2020 from './team/Team2020';
import Team2021 from './team/Team2021';
import Team2022 from './team/Team2022';
import Team2024 from './team/Team2024';
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';

const Teams = () => {
    const [activeTab, setActiveTab] = useState('2024');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="tabs gap-8">
                <div className='border-b border-gray-200 dark:border-neutral-700'>

                    <nav class="-mb-0.5 flex justify-center space-x-6" aria-label="Tabs" role="tablist">
                        <button className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 pb-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 ${activeTab === '2024' ? 'active !text-blue-500' : ''}`} onClick={() => handleTabChange('2024')}>2024</button>
                        {/* <button className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 pb-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500  ${activeTab === '2023' ? 'active' : ''}`} onClick={() => handleTabChange('2023')}>2023</button>
                        <button className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 pb-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500  ${activeTab === '2022' ? 'active' : ''}`} onClick={() => handleTabChange('2022')}>2022</button> */}
                        <button className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 pb-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 ${activeTab === '2021' ? 'active !text-blue-500' : ''}`} onClick={() => handleTabChange('2021')}>2021</button>
                        {/* <button className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 pb-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500  ${activeTab === '2020' ? 'active' : ''}`} onClick={() => handleTabChange('2020')}>2020</button> */}
                    </nav>
                </div>
            </div>
            <div className="tab-content px-4">
                {activeTab === '2024' && (<Team2024 />)}
                {activeTab === '2021' && (<Team2021 />)}
                {/* {activeTab === '2022' && (<Team2022 />)} */}
            </div>
        </div>
    );
}

export default Teams;

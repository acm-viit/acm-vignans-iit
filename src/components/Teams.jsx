import Team2020 from './team/Team2020';
import Team2021 from './team/Team2021';
import Team2022 from './team/Team2022';
import Team2024 from './team/Team2024';
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';

const Teams = () => {
    const [activeTab, setActiveTab] = useState('2024');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="tabs gap-8">
                <div className='border-b border-gray-200 dark:border-neutral-700'>

                    <nav className="mb-2 flex justify-center space-x-4 text-sm" aria-label="Tabs" role="tablist">
                        <motion.button
                            className={`px-[12px] p-[2px] rounded-full ${activeTab === '2024' ? 'active bg-dark/85 dark:bg-light dark:text-dark text-light font-semibold' : 'bg-gray-200 dark:bg-light/15 text-gray-700 dark:text-light'}`}
                            onClick={() => handleTabChange('2024')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        >
                            2024
                        </motion.button>
                        <motion.button
                            className={`px-[12px] p-[2px] rounded-full ${activeTab === '2021' ? 'active bg-dark/85 dark:bg-light dark:text-dark text-light font-semibold' : 'bg-gray-200 dark:bg-light/15 text-gray-700 dark:text-light'}`}
                            onClick={() => handleTabChange('2021')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        >
                            2021
                        </motion.button>
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

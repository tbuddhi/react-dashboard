import React from 'react';

import Sentiment from '../components/Cards/Sentiment';
import TweetsDistribution from '../components/Cards/TweetsDistribution';
import CodesOfJoy from '../components/Cards/CodesOfJoy';
import Occupations from '../components/Cards/Occupations';

function Dashboard() {
    return (
        <>
            <Sentiment />
            <CodesOfJoy />
            <TweetsDistribution />
            <Occupations />
        </>
    )
}

export default Dashboard;

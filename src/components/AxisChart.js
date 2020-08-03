import React from 'react';
import { Line } from 'react-chartjs-2';

function AxisChart( {data, options} ) {
    return <Line data={data} options={options} />
}

export default AxisChart;

import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import 'chartjs-plugin-piechart-outlabels'

import DoughnutCharts from '../DoughnutCharts';

const dataSet1 = {
	type: 'outlabeledPie',
	labels: [
		'Bold',
		'Diplomatic',
		'Confident',
		'Low-Key',
		'Punctual',
		'Helpful',
		'Cooperative',
    ],
	datasets: [{
        responsive: true,
		// maintainAspectRatio: false,
		labels: [
			{
				position: 'outside'
			}
		],
		data: [300, 50, 100, 230, 40, 20, 10],		
		borderWidth: 0,
		backgroundColor: [
			'#48b5f8',
			'#228ac9',
			'#176595',
			'#3b7598',
			'#6cc5fd',
			'#8fd3fe',
			'#1b98e4'
		],
		hoverBackgroundColor: [
			'#48b5f8',
			'#228ac9',
			'#176595',
			'#3b7598',
			'#6cc5fd',
			'#8fd3fe',
			'#1b98e4'
		],
	}]
};

const dataSet2 = {
	labels: [
		'Bold',
		'Diplomatic',
		'Confident',
		'Low-Key',
		'Punctual',
		'Helpful',
		'Cooperative',
	],
	datasets: [{
		responsive: true,
		maintainAspectRatio: true,
		labels: [
			{
				position: 'outside'
			}
		],
		data: [300, 50, 100, 230, 40, 20, 10],
		backgroundColor: [
		'#9ea6ab',
		'#b5c3cf',
		'#7a8a95',
		'#737f87',
		'#586268',
		'#96a3ac',
		'#adb2b6'
		]
    }]
};

const options = {
	zoomOutPercentage: 45, // makes chart 40% smaller (50% by default, if the preoprty is undefined)
	plugins: {
		legend: false,
		outlabels: {
			text: '%l %p',
			color: 'white',
			stretch: 45,
			font: {
				resizable: true,
				minSize: 12,
				maxSize: 18
			}
		}
	}
}

const CodesOfJoy = () => {
    return (
        <>
        <Card>
            <Card.Header>Codes of Joy</Card.Header>
            <Card.Body>
                <Container className="pb-5 pt-5">
                    <Row>
                        <Col>
                            <DoughnutCharts data={dataSet1} options={options} />
                        </Col>
                        <Col>
                            <DoughnutCharts data={dataSet2} options={options}/>
                        </Col>
                    </Row>
                </Container>                                                                                                                                   
            </Card.Body>
        </Card>
        </>
    )
}

export default CodesOfJoy;

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import AxisChart from '../AxisChart';

const data = {
    labels: [ '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019' ],
    datasets: [
        {
            label: 'Adidas',
            data: [ 200, 175, 125, 170, 140, 100, 110, 95, 98, 135, 75, 50],
            borderWidth: 2,
            borderColor: ['#d8dbdd'],
            backgroundColor: ['rgb(25 80 115 / 25%)'],
            pointBorderWidth: 1,
            pointBorderColor: ['#ffffff'],
            pointBackgroundColor: ['#d8dbdd']
        },
        {
            label: 'Nike',
            data: [ 120, 150, 175, 145, 180, 170, 98, 115, 120, 105, 95, 110],
            backgroundColor: ['rgb(102 111 119 / 25%)'],
            borderWidth: 2,
            borderColor: ['#8b8d8f'],
            pointBorderWidth: 1,
            pointBackgroundColor: ['#666f76'],
            pointBorderColor: ['#666f76'],
        }
    ]
}

const options = {
    responsive: true,
    legend: {
        display: true,
        labels: {
            fontColor: 'rgb(255, 255, 255)',
            fontSize: 12
        }
    },
    scales: {
        yAxes: [              
            { 
                scaleLabel: {
                    display: true,
                    labelString: 'Number',
                    fontColor: '#FFF'
                },
                ticks: {
                    min: 0,
                    max: 500,
                    stepSize: 100,
                    fontColor: '#FFF',
                    fontSize: 10
                }
            }
        ],
        xAxes: [              
            { 
                scaleLabel: {
                    display: true,
                    labelString: 'Time',
                    fontColor: '#FFF'
                },
                ticks: {
                    fontColor: '#FFF',
                    fontSize: 10
                }
            }
        ]
    }
}

const TweetsDistribution = () => {
    return (
        <>
        <Card>
            <Card.Header>Tweets Distribution</Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <AxisChart data={data} options={options} />
                        </Col>
                    </Row>
                </Container>                                                                                                                                   
            </Card.Body>
        </Card>
        </>
    )
}

export default TweetsDistribution;
 
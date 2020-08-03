import React from 'react';
import styled from 'styled-components';
import { Card, Container, Row, Col } from 'react-bootstrap';

import AxisChart from '../AxisChart';


const ChartTitle = styled.p`
    padding-left: 1.5rem;
    display: flex;
    align-items: center;
`

const ColoredSqure = styled.span`
    width: 24px;
    height: 24px;
    background: ${props => props.blue ? '#1da1f2': '#9ea6ab' };
    margin-right: 1rem;
    border-radius: 4px;
`

const Sentiment = () => {
    
    const Adidasdata = {
        labels: [ '2008', '2009', '2010', '2011', '2012', '2013' ],
        datasets: [
            {
                label: 'Positive',
                data: [ 40, 35, 30, 34, 30, 20],
                borderWidth: 2,
                borderColor: ['rgb(113 198 249)'],
                backgroundColor: ['rgb(63 118 154 / 40%)'],
                pointBorderWidth: 1,
                pointBorderColor: ['#ffffff'],
                pointBackgroundColor: ['rgb(113 198 249)']
            },
            {
                label: 'Negative',
                data: [ 28, 30, 35, 27, 32, 30],
                borderWidth: 2,
                backgroundColor: ['rgb(78 87 93 / 40%)'],
                borderColor: ['#4a7f9f'],
                pointBorderWidth: 1,
                pointBackgroundColor: ['#185f8b'],
                pointBorderColor: ['#185f8b'],
            },
            {
                label: 'Neutral',
                data: [ 16, 17, 19, 18, 23, 19],
                borderDash: [5, 5, 5] ,
                backgroundColor: ['rgb(35 46 58 / 40%)'],
                borderColor: ['rgb(171, 178, 182)'],
                pointBackgroundColor: ['rgb(171, 178, 182)'],
                pointBorderColor: ['rgb(171, 178, 182)'],
            },
        ]
    }

    const Nikedata = {
        labels: [ '2008', '2009', '2010', '2011', '2012', '2013' ],
        datasets: [
            {
                label: 'Positive',
                data: [ 40, 25, 30, 34, 30, 20],
                borderWidth: 2,
                borderColor: ['#d8dbdd'],
                backgroundColor: ['rgb(103 109 115 / 20%)'],
                pointBorderWidth: 1,
                pointBorderColor: ['#ffffff'],
                pointBackgroundColor: ['#d8dbdd'],
                // borderCapStyle: 'butt'
                // fill: false
            },
            {
                label: 'Negative',
                data: [ 28, 30, 35, 27, 32, 30],
                backgroundColor: ['rgb(70 75 81 / 40%)'],
                borderWidth: 2,
                borderColor: ['#8b8d8f'],
                pointBorderWidth: 1,
                pointBackgroundColor: ['#666f76'],
                pointBorderColor: ['#666f76'],
            },
            {
                label: 'Neutral',
                data: [ 16, 17, 19, 18, 23, 19],
                borderDash: [5, 5, 5] ,
                borderColor: ['rgb(171, 178, 182)'],
                pointBackgroundColor: ['rgb(171, 178, 182)'],
                pointBorderColor: ['rgb(171, 178, 182)'],
            },
        ]
    }

    const options = {
        responsive: true,
        chartArea: {
            backgroundColor: 'rgb(112 124 134)'
        },
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 255, 255)',
                fontSize: 10
            }
        },
        scales: {
            yAxes: [              
                { 
                    scaleLabel: {
                        display: true,
                        labelString: 'Percentage',
                        fontColor: '#FFF'
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 20,
                        fontColor: '#FFF',
                        fontSize: 8,
                    }
                }
            ],
            xAxes: [              
                { 
                    scaleLabel: {
                        display: true,
                        labelString: 'Year',
                        fontColor: '#FFF'
                    },
                    ticks: {
                        fontColor: '#FFF',
                        fontSize: 8
                    }
                }
            ]
        }
    }

    return (
        <>
        <Card>
            <Card.Header>Sentiment</Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <ChartTitle><ColoredSqure blue/>  Adidas</ChartTitle>
                            <AxisChart data={Adidasdata}  options={options} />
                        </Col>
                        <Col>
                            <ChartTitle><ColoredSqure/>  Nike</ChartTitle>
                            <AxisChart data={Nikedata} options={options} />
                        </Col>
                    </Row>
                </Container>                                                                                                                                   
            </Card.Body>
        </Card>
        </>
    )
}

export default Sentiment;

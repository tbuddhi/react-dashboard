import React from 'react'
import styled from 'styled-components'
// import * as sets from 'sets'
import { Card, Container, Row, Col } from 'react-bootstrap';

import imgPath from '../../images/profile-image.jpg'

const SetsWrapper = styled.div`
    display: flex;
    min-height: 425px;
`
const AdidasSets = styled.div`
    display: flex;
    width: 50%;
    border: 3px solid #1da1f2;
    border-radius: 13px;
    background: rgb(23 83 126 / 50%);
    position: relative;
`
const NikeSets = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-end;
    border: 3px solid #9ea6ab;
    border-radius: 13px;
    background: rgb(53 65 76 / 98%);
    position: relative;
`
const BothSets = styled.div`
    display: flex;
    width: 20%;
    position: absolute;
    top: 0;
    left: 40%;
    z-index: 99;
    background: gray;
    height: 100%;
    background: #1c2e3d;
    border-radius: 13px;
    border: 3px solid #254457;
    border-left-color: #1da1f2;
    border-right-color: #9ea6ab;
`
const UsersBlock = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem;

    span{
        display: flex;
        flex-direction: column;
        margin: 7%;
        font-size: 10px;
        align-items: center;
        justify-content: center;
        text-align: center;

        img{
            width: 3rem;
            height: 3rem;
            border: 2px solid #FFF;
            border-radius: 50%;
        }
    }
`
const SetsLabel = styled.span`
    position: absolute;
    width: 5rem;
    height: 5rem;
    display: flex;
    border: 3px solid;
    border-color: ${props => props.nike ? '#9ea6ab' : '#1da1f2'};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgb(0 0 0 / 58%);
    top: -1.5rem;
    left: ${props => props.nike ? 'auto' : '-1.5rem' };
    right:  ${props => props.nike ? '-1.5rem' : 0 };
    z-index: 1000;
`
const CenterSetsLabel = styled(SetsLabel)`
    left: 30%;
    border-color: #254457;
`
const Adidas = [
    {id: 1, img: imgPath, name:'Dictator'}, 
    {id: 2, img: imgPath, name:'Spider Man'}, 
    {id: 3, img: imgPath, name:'Doctor'}, 
    {id: 4, img: imgPath, name:'Iron Man'}, 
    {id: 5, img: imgPath, name:'Pizza Boy'}, 
    {id: 6, img: imgPath, name:'Avengers 2'}, 
    {id: 7, img: imgPath, name:'3000BC'}, 
    {id: 8, img: imgPath, name:'Harry Poter'}, 
    {id: 9, img: imgPath, name:'Ip Man'}, 
    {id: 10, img: imgPath, name:'Lion King'}, 
    {id: 11, img: imgPath, name:'Top Gun'}, 
    {id: 12, img: imgPath, name:'Star Trek'}, 
    {id: 13, img: imgPath, name:'Maleena'}
]

const Nike = [
    {id: 1, img: imgPath, name:'Dictator'}, 
    {id: 2, img: imgPath, name:'Spider Man'}, 
    {id: 3, img: imgPath, name:'Doctor'}, 
    {id: 4, img: imgPath, name:'Iron Man'}, 
    {id: 5, img: imgPath, name:'Pizza Boy'}, 
    // {id: 6, img: imgPath, name:'Avengers'}, 
    // {id: 7, img: imgPath, name:'2 Guns'}, 
    {id: 8, img: imgPath, name:'Poter'}, 
    {id: 10, img: imgPath, name:'Lion'}, 
    {id: 11, img: imgPath, name:'TopGun'}, 
    {id: 12, img: imgPath, name:'StarTrek'}, 
    {id: 13, img: imgPath, name:'Maleena2'}
]

// const inBoth = sets.intersection(Adidas, Nike)
// const AdidasOnly = sets.difference(Adidas, Nike)
// const NikeOnly = sets.difference(Nike, Adidas)

// const inBoth = Adidas.filter(x => Nike.includes( x2 => x.name === x2.name));
const AdidasOnly = Adidas.filter(n => !Nike.some(n2 => n.name === n2.name));
const NikeOnly = Nike.filter(n => !Adidas.some(n2 => n.name === n2.name));

const inBoth = [
    {id: 1, img: imgPath, name:'Dictator'}, 
    {id: 2, img: imgPath, name:'Spider Man'}, 
    {id: 3, img: imgPath, name:'Doctor'}, 
    {id: 4, img: imgPath, name:'Iron Man'}, 
    {id: 5, img: imgPath, name:'Pizza Boy'} 
]

console.log('Dif1', AdidasOnly)
console.log('Dif2', NikeOnly)
// console.log('inBoth', inBoth)

const Occupations = () => {
    return (
        <>
        <Card>
            <Card.Header>Occupations</Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <SetsWrapper>
                                <AdidasSets>
                                    <SetsLabel>Adidas</SetsLabel>
                                    <UsersBlock className="pr-5">
                                        { AdidasOnly && AdidasOnly.map(user => 
                                            <span key={user.id}>
                                                <img alt="UserProfile" src={user.img} />
                                                <span>{user.name}</span>
                                            </span>
                                        )}
                                    </UsersBlock>
                                </AdidasSets>
                                <BothSets>
                                    <CenterSetsLabel>Both Brands</CenterSetsLabel>
                                    <UsersBlock>
                                        { inBoth && inBoth.map(user => 
                                            <span key={user.id}>
                                                <img alt="UserProfile" src={user.img} />
                                                <span>{user.name}</span>
                                            </span>
                                        )}
                                    </UsersBlock>
                                </BothSets>
                                <NikeSets>
                                    <SetsLabel nike>Nike</SetsLabel>
                                    <UsersBlock>
                                        { NikeOnly && NikeOnly.map(user => 
                                            <span key={user.id}>
                                                <img alt="UserProfile" src={user.img} />
                                                <span>{user.name}</span>
                                            </span>
                                        )}
                                    </UsersBlock>
                                </NikeSets>
                            </SetsWrapper>
                        </Col>
                    </Row>
                </Container>                                                                                                                                   
            </Card.Body>
        </Card>
        </>
    )
}

export default Occupations;

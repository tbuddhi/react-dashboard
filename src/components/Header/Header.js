import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import MainNavs from './MainNavs'
import SearchNavs from './SearchNavs'
import UserImg from '../../images/user.png'


const TopNav = styled.div`
    display: flex;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    justify-content: flex-end;
    border-bottom: 1px solid rgb(67 79 88 / 50%);
    background-color: #15202b;
    align-items: center;
    z-index: 999;
`

const UserIcon = styled.a`
    position: absolute;
    right: 4rem;

    img{
        width: 36px;
        height: auto;
    }  
`

const Header = () => {
    return(
        <header>
            <TopNav>                
                <UserIcon >
                    <Link to="/"><img src={UserImg} alt="Profile" /></Link>
                </UserIcon>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col>
                           <SearchNavs /> 
                        </Col>
                        <Col>
                            <MainNavs />
                        </Col>
                    </Row>
                </Container>
            </TopNav>       
        </header>
    )
}

export default Header
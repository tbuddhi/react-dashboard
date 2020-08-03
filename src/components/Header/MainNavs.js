import React from 'react'
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const NavWrapper = styled.div`
    display: block;
    height: 100%;
    position: relative;
    top: 1px;

    .nav{
        height: 100%;
        align-items: center;

        .nav-item{
            height: 100%;

            .nav-link{
                color: #fff;
                height: 100%;
                display: flex;
                align-items: center;
                border-bottom: 1px solid rgb(67 79 88 / 0%);
                padding: 0;
                margin-left: 2.5rem;
                transition: all .3s;
        
                &:hover,
                &.active,
                &:active{
                    color: #1da1f2;
                    border-bottom: 1px solid #1da1f2;
                }
            }
        }
    }
`

const MainNavs = () => {
    return (
        <NavWrapper>
           <Nav className="justify-content-end" activeKey="/attitude">
                <Nav.Item>
                    <NavLink to="/overview" className="nav-link" activeClassName="active">Overview</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to="/identity">Identity</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to="/attitude">Attitude</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to="/interests">Interests</NavLink>
                </Nav.Item>
            </Nav>
        </NavWrapper>
    )
}

export default MainNavs;

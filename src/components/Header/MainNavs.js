import React from 'react'
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

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
                    <Nav.Link href="/overview">Overview</Nav.Link>
                    {/* <Link to="/overview">Overview</Link> */}
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/identity">Identity</Nav.Link>
                    {/* <Link to="/identity">Identity</Link> */}
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="active" href="/attitude">Attitude</Nav.Link>
                    {/* <Link  to="/attitude">Attitude</Link> */}
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/interests">Interests</Nav.Link>
                    {/* <Link to="/interests">Interests</Link> */}
                </Nav.Item>
            </Nav>
        </NavWrapper>
    )
}

export default MainNavs;

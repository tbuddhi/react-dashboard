import React from 'react'
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

import SearchIcon from '../../images/search.png'

const NavList = styled.ul`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: wrap-reverse;
    padding: 0;
    margin-bottom: 0;
    justify-content: space-between;
    height: 100%;

    li{
        list-style: none;

        .dropdown {
            button{
                color: #707c86;
                background-color: #253341;
                border: 0;
                border-radius: 20px;
                min-width: 120px;
            }
        }

        .dropdown-menu.show{
            background: #253341;
            top: 10px !important;
            
            a{
                color: #707c86;
            }
        }
    }
`

const SearchButton = styled.a`
    display: flex;
    width: 36px;
    padding: .6rem;
    border-radius: 50%;
    border: 1px solid #1da1f2;

    img{
        width: 100%;
        height: auto;
    }
`

const SearchNavs = () => {
    return (
        <NavList>
            <li>
                <SearchButton href="/">
                    <img src={SearchIcon} alt="Search"/>
                </SearchButton>   
            </li>
            <li>
                <Dropdown>
                    <Dropdown.Toggle >
                        Location
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Location 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Location 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Location 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
            <li>
                <Dropdown>
                    <Dropdown.Toggle >
                        Competitor brand
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Brand 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Brand 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Brand 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
            <li>
                <Dropdown>
                    <Dropdown.Toggle >
                        Brand 1
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Brand 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Brand 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Brand 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
        </NavList>
    )
}

export default SearchNavs;

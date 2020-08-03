import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'

const Main = styled.main`
    margin-top: 120px;
`

const Layout = ({children}) => {
    return(
        <>
            <Header />
            <Main className="container">
                {children}
            </Main>
        </>
    )
}

export default Layout
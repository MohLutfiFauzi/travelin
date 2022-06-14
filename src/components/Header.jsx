import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    padding: 8px 20px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: #00C2FF;
`

const ContainerSearchBar = styled.div`
    display: flex;
    width: 252px;
    height: 50px;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #00C2FF;
    border-radius: 8px;
`

const SearchBar = styled.input`
    border: none;
    &:focus{
        outline: none;
    }
`

const Header = () => {
    return (
        <Container>
            <Logo>Travelin</Logo>
            <ContainerSearchBar>
                <Search style={{ cursor: 'pointer' }} />
                <SearchBar placeholder='search' />
            </ContainerSearchBar>
        </Container>
    )
}

export default Header
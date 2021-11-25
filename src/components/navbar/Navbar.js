import React from 'react'
import { Nav, LeftLinks, NavLinks, RightLinks } from './navbar.elements'
import ViewListIcon from '@mui/icons-material/ViewList'

const Navbar = () => {
    return (
        <Nav>
            <LeftLinks>
                <NavLinks to='/about'>about</NavLinks>
                <NavLinks to='/store'>store</NavLinks>
            </LeftLinks>
            <RightLinks>
                <NavLinks to='/gmail'>gmail</NavLinks>
                <NavLinks to='/images'>images</NavLinks>
                <NavLinks to='/'>
                    <ViewListIcon />
                </NavLinks>
            </RightLinks>
        </Nav>
    )
}

export default Navbar

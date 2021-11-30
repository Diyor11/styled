import React, {useState} from 'react'
import { Nav, NavBrand, NavLinks, NavLinkLi, Bars, FullNav } from './navbar.elements'
import { Container } from '../../globalStyles'
import logoImg from '../../assets/colibri.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false)
    let ww = window.innerWidth
    
    window.addEventListener('resize', () => ww = window.innerWidth)
    const navItems = [
        {
            name: 'ГЛАВНАЯ',
            path: '/'
        },
        {
            name: 'О НАС',
            path: '/about'
        },
        {
            name: 'УСЛУГИ',
            path: 'services'
        },
        {
            name: 'КОНТАКТЫ',
            path: 'contact'
        }
    ]

    return (
        <Nav>
            <Container h jc='space-between'>
                <NavBrand to='/' >
                    <h4>.Colibrisoft</h4>
                    <img src={logoImg} alt='colibrie' />
                </NavBrand>
                    {
                        ww >= 1280 ? <NavLinks deckTop={ww >= 1280} >
                            {navItems.map(item => (
                                        <NavLinkLi key={item.path} active={window.location.pathname === item.path} >
                                            <NavLink to={item.path} >
                                                {item.name}
                                            </NavLink>
                                        </NavLinkLi>
                                ))
                            }
                            <li className='leave-request'>Оставьте заявку</li>
                            <li className='phone'>
                                <a href='tel:+9989773812310'>+998 97 738 23 10</a>
                            </li>
                        </NavLinks> : (
                            <Bars onClick={() => setNavOpen(!navOpen)} open={navOpen} >
                                <div className='bar1'></div>
                                <div className='bar2'></div>
                                <div className='bar3'></div>
                            </Bars>
                        )
                    }
                    {
                        navOpen && <FullNav>
                            <Container h >
                                <NavLinks deckTop={ww >= 1280} >
                                {
                                    navItems.map(item => (
                                            <NavLinkLi key={item.path} active={window.location.pathname === item.path} >
                                                <NavLink to={item.path} >
                                                    {item.name}
                                                </NavLink>
                                            </NavLinkLi>
                                    ))
                                }
                                <li className='leave-request'>Оставьте заявку</li>
                                <li className='phone'>
                                    <a href='tel:+9989773812310'>+998 97 738 23 10</a>
                                </li>
                                </NavLinks>
                            </Container>
                        </FullNav>
                    }
            </Container>
        </Nav>
    )
}

export default Navbar
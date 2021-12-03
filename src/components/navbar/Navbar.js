import React, {useState} from 'react'
import { Nav, NavBrand, NavLinks, NavLinkLi, Bars, FullNav, Order } from './navbar.elements'
import { Container } from '../../globalStyles'
import logoImg from '../../assets/colibri.png'
import { NavLink } from 'react-router-dom'
import { Modal } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false)
    let ww = window.innerWidth;
    const [scrolled, setScrolled] = useState(false)
    const [modal, setModal] = useState(false)
    
    window.addEventListener('resize', () => ww = window.innerWidth)
    const navItems = [
        {
            name: 'ГЛАВНАЯ',
            path: '/'
        },
        {
            name: 'УСЛУГИ',
            path: '/services'
        },
        {
            name: 'КОНТАКТЫ',
            path: '/contact'
        }
    ]

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 200){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    })

    return (
        <>
        <Nav scrolled={scrolled}>
            <Container h jc='space-between'>
                <NavBrand to='/' scrolled={scrolled} >
                    <h4>.Colibrisoft</h4>
                    <img src={logoImg} alt='colibrie' />
                </NavBrand>
                    {
                        ww >= 1280 ? <NavLinks scrolled={scrolled} deckTop={ww >= 1280} >
                            {navItems.map(item => (
                                        <NavLinkLi key={item.path} active={window.location.pathname === item.path} >
                                            <NavLink to={item.path} >
                                                {item.name}
                                            </NavLink>
                                        </NavLinkLi>
                                ))
                            }
                            <li className='leave-request' onClick={() => setModal(true)} >Оставьте заявку</li>
                            <li className='phone'>
                                <a href='tel:+9989773812310'>+998 97 738 23 10</a>
                            </li>
                        </NavLinks> : (
                            <Bars scrolled={scrolled} navOpen={navOpen} open={navOpen} >
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
                                <li className='leave-request' onClick={() => setModal(true)}>Оставьте заявку</li>
                                <li className='phone'>
                                    <a href='tel:+9989773812310'>+998 97 738 23 10</a>
                                </li>
                                </NavLinks>
                            </Container>
                        </FullNav>
                    }
            </Container>
        </Nav>
        <Modal
            open={modal}
        >
            <Order>
                <header>
                    <h3>Оставьте заявку</h3>
                    <IconButton onClick={() => setModal(false)} >
                        <CloseIcon />
                    </IconButton>
                </header>
                <div className='body'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type='text' />
                        <input type='text' />
                    </form>
                    <h4 className='query'>Что вас интересует?</h4>
                    <div className='icons'>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-telegram-plane"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </Order>
      </Modal>
        </>
    )
}

export default Navbar
import React, {useState} from 'react'
import { Nav, NavBrand, NavLinks, NavLinkLi, Bars, FullNav, Order, CheckboxGroup } from './navbar.elements'
import { Container } from '../../globalStyles'
import logoImg from '../../assets/colibri.png'
import { NavLink } from 'react-router-dom'
import { Modal } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { AnimaCheckbox, CheckboxLabel } from '../../pages/home/home.elements'
import { SendButton } from '../../pages/home/home.elements'

const Checkbox = ({text, index}) => {
    const [checked, setChecked] = useState(false)
    return(
        <span>
            <AnimaCheckbox id={'checkbox' + index} type='checkbox' checked={checked} onChange={() => setChecked(prev => !prev)} />
            <CheckboxLabel htmlFor={'checkbox' + index} >{text}</CheckboxLabel>
        </span>
    )
}

const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false)
    let ww = window.innerWidth;
    const [scrolled, setScrolled] = useState(false)
    const [modal, setModal] = useState(false)
    const [value, setValue] = useState('+998 ')
    
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
    const checboxLabels = [
        'создать сайт',
        'создать мобильное приложение',
        'создать телеграм бот',
        'Поддержка и продвижение',
        'другой'
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
                            <Bars scrolled={scrolled} onClick={() => setNavOpen(!navOpen)} navOpen={navOpen} open={navOpen} >
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
            onClose={() => setModal(false)}
        >
            <Order>
                <header>
                    <h3>Оставьте заявку</h3>
                    <IconButton onClick={() => setModal(false)}>
                        <CloseIcon />
                    </IconButton>
                </header>
                <div className='body'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type='text' placeholder='Как к вам обращаться?' />
                        <input type='text' placeholder='+998 ' value={value} onChange={({target}) => setValue(target.value)}  />
                    </form>
                    <h4 className='query'>Что вас интересует?</h4>
                    <CheckboxGroup>
                        {
                            checboxLabels.map((item, index) => <Checkbox key={index} index={index} text={item} />)
                        }
                    </CheckboxGroup>
                    <div style={{width: 'fit-content', margin: '0 auto'}}>
                        <SendButton>Отправить <i className="fas fa-angle-double-right"></i></SendButton>
                    </div>
                </div>
            </Order>
      </Modal>
        </>
    )
}

export default Navbar
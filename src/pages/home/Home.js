import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { AboutUs, ChevronsAnim, Contact, Header, HeaderTextBox, HomeWrapper, Services } from './home.elements'
import { BgStars } from '../../components/animations/animation'
import ScrollBar from '../../components/animations/ScrollBar'
import { Container } from '../../globalStyles'

const Home = () => {

    const [active, setActive] = useState(0)

    const handleScroll = (fullHeight, top, el) => {
        const point = (top / fullHeight) * 100
        if(point < 15) setActive(0)
        if(point >= 15 && point < 40) setActive(1)
        if(point >= 40 && point < 65) setActive(2)
        if(point >= 65) setActive(3)
    }

    return (
        <HomeWrapper onScroll={(e) => handleScroll(e.target.scrollHeight, e.target.scrollTop, e.target)}  >
            <ScrollBar active={active}  />
            <Navbar />
            <Header >
                <BgStars />
                <HeaderTextBox>
                    <h1>Colibrisoft</h1>
                    <h2>IT-Решения Для Бизнеса</h2>
                </HeaderTextBox>
                <ChevronsAnim>
                    <span className='chevrons_container'>
                        <div className='chevron1'></div>
                        <div className='chevron2'></div>
                        <div className='chevron3'></div>
                    </span>
                </ChevronsAnim>
            </Header>
            <AboutUs>
                <Container h ai='center' jc='space-between' >
                    <div className='left'>
                        <h3>НАША МИССИЯ</h3>
                    </div>
                    <div className='right'>
                        <p>
                            Быть инновационным лидером и предпочтительным партнёром, 
                            оказывая нашим клиентам качественные услуги в области информационных технологий.
                        </p>
                        <button>кто мы такие <i className="fas fa-angle-double-right"></i></button>
                    </div>
                </Container>
            </AboutUs>
            <Services></Services>
            <Contact></Contact>
        </HomeWrapper>
    )
}

export default Home

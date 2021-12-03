import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { AboutUs, ChevronsAnim, Contact, Header, HeaderTextBox, HomeWrapper, Services, AboutText, Card, AnimaBtn, MapSection, ContactBox, SendButton, CheckboxLabel, AnimaCheckbox, Footer } from './home.elements'
import { BgStars } from '../../components/animations/animation'
import ScrollBar from '../../components/animations/ScrollBar'
import { Container } from '../../globalStyles'
import { Fade } from 'react-reveal'
import { icon1, icon2, icon3 } from '../../components/img/icon'
import { NavLink } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import { mapOptions } from '../../components/utilities/mapOptions'
import { Pin, Pulse } from '../../components/animations/marker'

const cards = [
    {
        position: 'left',
        img: icon1,
        text: 'Качественные сайты любого уровня сложности по последним трендам'
    },
    {
        position: 'bottom',
        img: icon2,
        text: 'Мобильные приложения отвечающие требованиям мировых стандартов'
    },
    {
        position: 'right',
        img: icon3,
        text: 'Умные телеграм боты для упрощения и повышения эффективности бизнеса'
    }
]

const Checkbox = ({text, index}) => {
    const [checked, setChecked] = useState(false)
    return(
        <span>
            <AnimaCheckbox id={'checkbox' + index} type='checkbox' checked={checked} onChange={() => setChecked(prev => !prev)} />
            <CheckboxLabel htmlFor={'checkbox' + index} >{text}</CheckboxLabel>
        </span>
    )
}

const checboxLabels = [
    'создать сайт',
    'создать мобильное приложение',
    'создать телеграм бот',
    'Поддержка и продвижение',
    'другой'
]

const MarkerMap = () => 
    <>
        <Pin />
        <Pulse />
    </>;

const Home = () => {

    const [active, setActive] = useState(0)
    const [phone, setPhone] = useState('')

    const handleScroll = (fullHeight, top) => {
        console.log('scrolled')

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
                        {
                            ['chevron1', 'chevron2', 'chevron3'].map(item => <div key={item} className={item}></div>)
                        }
                    </span>
                </ChevronsAnim>
            </Header>
            <AboutUs>
                <Container h ai='center' jc='space-between' >
                    <div className='left'>
                        <h3>НАША МИССИЯ</h3>
                    </div>
                    <div className='right'>   
                        <Fade duration={500} right >
                            <AboutText>
                                Быть инновационным лидером и предпочтительным партнёром, 
                                оказывая нашим клиентам качественные услуги в области информационных технологий.
                            </AboutText>
                        </Fade>
                        <Fade duration={500} bottom >
                            <button>кто мы такие <i className="fas fa-angle-double-right"></i></button>
                        </Fade>
                    </div>
                </Container>
            </AboutUs>
            <Services>
                <BgStars />
                <Container >
                    <div className='cards'>
                        {
                            cards.map((item, index) => (
                                <Fade top duration={1000} key={index} delay={400 + (100 * (index + 1))} >
                                    <Card>
                                        <img alt='' src={item.img} />
                                        <p>
                                            {item.text}
                                        </p>
                                        <NavLink to='/'>ПОДРОБНО</NavLink>
                                    </Card>
                                </Fade>
                            ))
                        }
                    </div>
                </Container>
                    <AnimaBtn>кто мы такие <i className="fas fa-angle-double-right"></i></AnimaBtn>
            </Services>
            <Contact>
        <ContactBox>
            <div className='info'>
                <h3 className='title'>НАШИ КОНТАКТЫ</h3>
                <p>
                    Свяжитесь с нами или оставьте заявку для получения более подробной информации о наших услугах
                </p>
                <div className='location'>
                    г. Ташкент, Мирзо-Улугбекский р-н,
                    ул. Зиёлилар, 9
                </div>
                <div className='phone'>
                    <div className='first'>
                        +998 90 355-20-60
                    </div>
                    <div className='second'>
                        +998 97 149-14-07
                    </div>
                </div>
                <div className='social_medias'>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-telegram-plane"></i>
                    <i className="fab fa-instagram"></i>
                </div>
                <div className='footer'>
                    ©2021 Colibrisoft | Все права защищены
                </div>
            </div>
            <div className='message'>
                <form onSubmit={e => e.preventDefault()}>
                    <input placeholder='Как к вам обращаться?' type='text' />
                    <input value={phone} onChange={({target}) =>  setPhone(!phone ? `+998 ${target.value}`:target.value)} placeholder='+998 (__) ___ __ __' type='text' />
                    <div className='checkbox_group'>
                        {
                            checboxLabels.map((item, index) => <Checkbox key={index} index={index} text={item} />)
                        }
                    </div>
                    <SendButton>Отправить <i className="fas fa-angle-double-right"></i></SendButton>
                </form>
            </div>
            </ContactBox>
                <MapSection>
            <GoogleMapReact
                  style={{zIndex: 5}}
                            
                    bootstrapURLKeys={{ key: 'AIzaSyB0nNC2JY5h2LxGdKCTXSXMV5ZNDrpwvvA' }}
                    defaultCenter={{lat: 41.38194503091835, lng: 69.39671381123095}} 
                    center={{lat: 41.338950, lng: 69.317345}}
                    defaultZoom={15}
                    options={mapOptions}
                >
                <MarkerMap
                    lat={41.338473}
                    lng={69.334568}
                />
      </GoogleMapReact>
        </MapSection>
            </Contact>
            <Footer>
                <Container d='block'>
                    <div className='icons'>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-telegram-plane"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <h6 className='underTitle'>
                        ©2021 Colibrisoft | Все права защищены
                    </h6>
                </Container>
            </Footer>
        </HomeWrapper>
    )
}

export default Home

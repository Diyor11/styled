import React, { useState } from 'react'
import { ContactBox, MapSection, SendButton, Footer, AnimaCheckbox, CheckboxLabel, Contact } from '../home/home.elements'
import GoogleMapReact from 'google-map-react'
import { mapOptions } from '../../components/utilities/mapOptions'
import { Container } from '../../globalStyles'
import { Pin, Pulse } from '../../components/animations/marker'
import Navbar from '../../components/navbar/Navbar'

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

export const MarkerMap = () => 
    <>
        <Pin />
        <Pulse />
    </>;


const ContactPage = () => {
    const [phone, setPhone] = useState('')

    return (
        <>
            <Navbar />
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
        </>
    )
}

export default ContactPage



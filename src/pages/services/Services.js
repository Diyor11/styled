import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { FaceBody, FacePage, HeroTextBox, MainText, CardsWrapper, Card, EndText } from './services.elements'
import { BgStars } from '../../components/animations/animation'
import { Mouse } from '../../components/animations/Mouse'
import { Container } from '../../globalStyles'

const cardsData = [
    {
        title: 'Landing-page',
        price: 'от 1,5 милионов сум',
        comment: 'Лендинг формируется таким образом, чтобы коротко и доходчиво изложить суть предложения, вызвать заинтересованность, убедить клиента в том, что это то чего он желает.',
        img: 'url("https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=830&q=80")'
    },
    {
        title: 'Корпоративные сайты',
        price: 'от 3 миллионов сум',
        comment: 'Корпоративный сайт – это сайт компании, ее официальное виртуальное представительство в интернете.',
        img: 'url("https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")'
    },
    {
        title: 'Разработка интернет-магазинов',
        price: 'от 10 миллионов сум',
        comment: 'Мы создаем интернет-магазины на готовых движках, а также уникальные магазины, подключаем национальные и зарубежные способы оплаты.',
        img: 'url("https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")'
    },
    {
        title: 'Уникальная Веб-Разработка',
        price: 'от 12 миллионов сум',
        comment: 'В зависимости от сложности Вашей задачи мы можем разработать корпоративный веб-сайт, портал или торговую площадку.',
        img: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=702&q=80")'
    },
    {
        title: 'Landing-page',
        price: 'от 1,5 милионов сум',
        comment: 'Лендинг формируется таким образом, чтобы коротко и доходчиво изложить суть предложения, вызвать заинтересованность, убедить клиента в том, что это то чего он желает.',
        img: 'url("https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80")'
    },
    {
        title: 'Разработка интернет-магазинов',
        price: 'от 16 милионов сум',
        comment: 'Лендинг формируется таким образом, чтобы коротко и доходчиво изложить суть предложения, вызвать заинтересованность, убедить клиента в том, что это то чего он желает.',
        img: 'url("https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")'
    }
]

const Services = () => {

    return (
        <>  
            <Navbar />
            <FacePage>
                <BgStars />
                <MainText>
                    <div className="hero_content_bg">
                        <h1>
                            Что мы делаем...
                        </h1> 
                    </div>
                    <div className="hero_content">
                        <h1>
                            Что мы делаем...
                        </h1> 
                    </div>
                </MainText>
                <Mouse />
            </FacePage>
            <FaceBody>
                <Container d='block'>
                    <HeroTextBox>
                        <div className='title'>
                            Мы делаем то, что любим и любим то, что делаем...
                        </div>
                        <div className='body'>
                            Помогаем клиентам построить результативный бизнес при помощи интернет-маркетинга. Проектируем и создаем продающие лендинги, корпоративные сайты, интернет-магазины, сайты с индивидуальным решением, мобильные приложения, телеграм боты. Также мы предоставляем услуги профессионального графического дизайна, на случай его отсутствия. Мы делаем хорошую рекламу в Интернете и в социальных сетях Facebook, Instagram с максимальным эффектом. Мы заботимся, чтобы реализованные нами проекты приносили успех своим владельцам.
                        </div>
                    </HeroTextBox>
                    <CardsWrapper>
                        {
                            cardsData.map((item, index) => (
                                <Card img={item.img} key={index} >
                                    <div className='face front' >
                                        <div className='text'>
                                            <p className='title'>{item.title}</p>
                                            <div className='line'></div>
                                            <div className='price'>{item.price}</div>
                                        </div>
                                    </div>
                                    <div className='face back'>
                                        <div className='text'>
                                            <p className='commant'>
                                                {item.comment}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }
                    </CardsWrapper>
                    <EndText>
                        *Окончательная стоимость услуг и срок разработки может варьироваться исходя из ваших потребностей, пожеланий и сложности технического задания.
                    </EndText>
                </Container>
            </FaceBody>
        </>
    )
}

export default Services

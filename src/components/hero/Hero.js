import React from 'react'
import { Button, Content, Desc, Left, Section, Title } from './hero.elements'

const Hero = () => {
    return (
        <>
          <Section>
            <Content>
                <Left>
                    <Title>
                        <Desc />
                        <Button />
                    </Title>
                </Left>
            </Content>
          </Section>  
        </>
    )
}

export default Hero

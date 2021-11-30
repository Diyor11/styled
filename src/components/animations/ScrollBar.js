import React from 'react'
import styled from 'styled-components'

const ScrollUl = styled.ul` 
    position: fixed;
    top: 45%;
    right: 40px;
    z-index: 11;

    @media(max-width: 1199px){
        display: none;
    }
`

const Li = styled.li`
    cursor: pointer;
    width: 4px;
    height: 4px;
    list-style-type: none;
    border: 1px solid yellow;
    border-radius: 50%;
    background: ${({active, theme}) => (active ? theme.yellow : 'transparent')};
    position: relative;
    margin: 8px auto 0;
    z-index: 12;
    padding: ${({active}) => (active ? '4px': 0)};
    transition: .2s;
    :before{
            content: '${({text}) => (text)}';
            color: #fff;
            font-family: sans-serif;
            font-size: 16px;
            opacity: 0;
            transition: .2s ease-in;
            position: absolute;
            top: -5px;
            left: -100px;
        }
    :hover{
        :before{
            left: -${({length}) => (50 + length)}px;
            opacity: 1;
        }
    }
`

const ScrollBar = ({active}) => {

    const menuItems = ['ГЛАВНАЯ', 'О НАС', 'УСЛУГИ', 'КОНТАКТЫ']

    const handleClick = number => {
        const clientH = document.documentElement.clientHeight
        console.log('work')
        window.scrollTo(0, number * clientH)
    }

    return (
        <ScrollUl>
            {
                menuItems.map((item, index )=> (
                    <Li onClick={() => handleClick(index + 1)} key={item} text={item} active={index === active} length={item.length * 5} />
                ))
            }
        </ScrollUl>
    )
}

export default ScrollBar

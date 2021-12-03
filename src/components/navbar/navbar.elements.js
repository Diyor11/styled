import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    position: fixed;
    width: 100%;
    height: ${({scrolled}) => (scrolled ? '56px':'88px')};
    background-color: ${({scrolled}) => (scrolled && (window.location.pathname !== '/') ? '#fff':'transparent')};
    top: 0;
    left: 0;
    z-index: 20;
    @media(max-width: 600px){
        height: 56px
    }
`

export const NavBrand = styled(NavLink)`

    display: flex;
    align-items: center;
    h4{
        font-family: sans-serif;
        font-size: 35px;
        letter-spacing: ${({scrolled}) => (scrolled && (window.location.pathname !== '/') ? '1px': '-14px')};
        color: ${({scrolled}) => (scrolled ? '#BC188F': '#fff')};
        opacity: ${({scrolled}) => (scrolled && (window.location.pathname !== '/') ? 1 : 0)};
        transition: .6s ease-in;
    }
    img{
        display: ${({scrolled}) => ((scrolled && (window.location.pathname !== '/')) ? 'none' : 'flex')};
        @media(max-width: 600px){
            width: 40px;
        }
    }
    &:hover{
        h4{
            letter-spacing: 1px;
            opacity: 1;
        }
    }
`

const navLinkStyles = `
    font-size: 13px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-family: 'Ubuntu', sans-serif;
    margin: 0 14px;
    font-weight: 800;
    cursor: pointer;
    transition: 0.3s;
`

export const NavLinks = styled.ul`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Ubuntu:ital,wght@1,500&display=swap');

    display: flex;
    align-items: ${({deckTop}) => (deckTop ? 'center':'flex-start')};
    flex-direction: ${({deckTop}) => (deckTop ? 'row':'column' )};
    float: ${({deckTop}) => (!deckTop && 'left')};
    .phone{
        font-size: 15px;
        ${navLinkStyles}
        color: ${({scrolled}) => (scrolled ? "#000": '#fff')};
        margin-top: ${({deckTop}) => (!deckTop && '25px')};
    }
    .leave-request{
        font-size: 16px;
        padding: 7px 18px;
        border-radius: 18px;
        ${navLinkStyles}
        color: ${({scrolled}) => (scrolled && '#fff')};
        border: 1px solid ${({scrolled}) => (scrolled && '#0957FE')};
        margin: 0 5px;
        text-transform: uppercase;
        margin-top: ${({deckTop}) => (!deckTop && '25px')};
        background-color: ${({scrolled}) => (scrolled ? '#0957FE':'transparent')};
    }
    li{
        margin-top: ${({deckTop}) => (!deckTop && '25px')};
        font-size: ${({deckTop}) => (!deckTop && '20px')};
        a{
            color: ${({scrolled}) => (scrolled ? "#000":'#fff')} !important;
        }
        :hover{
            color: ${({theme}) => theme.yellow} !important;
            a{
                color: ${({theme}) => theme.yellow} !important;
            }
        }
    }
`

export const NavLinkLi = styled.li`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Ubuntu:ital,wght@1,500&display=swap');

    width: fit-content;
    a{
        text-decoration: ${({active, theme}) => (active ?`3px underline ${theme.yellow}`:'none')};
        ${navLinkStyles}
    }
`

export const Bars = styled.div`
    display: inline-block;
    cursor: pointer;
    z-index: 12;
    .bar1, .bar2, .bar3{
        width: 28px;
        height: 2px;
        background-color: #fff;
        margin: 6px 0;
        transition: 0.4s;
        @media(max-width: 1280px){
            background-color: ${({navOpen}) => (!navOpen ? '#000':'#fff')};
            background-color: ${({scrolled}) => (scrolled && (window.location.pathname !== '/') ? '#000':'#fff')};
        }
    }

    .bar1 {
        transform: ${({open}) => (open && 'rotate(-45deg) translate(-7px, 4px)')};
    }

    .bar2 {
        opacity: ${({open}) => (open ? 0:1)};
        transform: ${({open}) => (open && 'translateX(-70%)')};
    }

    .bar3 {
        transform: ${({open}) => (open && 'rotate(45deg) translate(-6px, -6px)')};
    }
`

export const FullNav = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 9, 31, 1);
    z-index: 10;
`

export const Order = styled.div`
    width: 320px;
    min-height: 500px;
    background-color: #0A46C2;
    position: fixed;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    @media(max-width: 600px){
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        transform: translate(0);
    }
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 12px;
        height: 37px;
        h3{
            font-family: sans-serif;
        }
    }
    .body{
        height: 100%;
        padding: 15px;
        form{
            input{
                display: block;
                width: 100%;
                color: #fff;
                border-color: transparent;
                border-bottom: 1.2px solid #ddd;
                font-size: 16px;
                font-family: sans-serif;
                padding: 4px;
                margin: 9px 0;
                background: transparent;
                box-sizing: border-box;
                outline: none;
                ::placeholder{
                    color: #fff;
                }
                :focus{
                    border-bottom: 1.2px solid ${({theme}) => theme.yellow};
                }
            }
        }
        .query{
            color: #fff;
            font-size: 17px;
            font-family: sans-serif;
            padding-top: 15px;
            font-weight: 400;
        }
    }
`

export const CheckboxGroup = styled.div` 
    padding-top: 30px;
    margin-bottom: 20px;
    span{
        display: block;
        padding: 5px 0;
        font-size: 15px;
    }
`
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    position: fixed;
    width: 100%;
    height: ${({scrolled}) => (scrolled ? '56px': '88px')};
    background-color: ${({scrolled}) => (scrolled ? '#fff':'transparent')};
    top: 0;
    left: 0;
    z-index: 10;
`

export const NavBrand = styled(NavLink)`

    display: flex;
    align-items: center;
    h4{
        font-family: sans-serif;
        font-size: 35px;
        letter-spacing: -14px;
        color: ${({scrolled}) => (scrolled ? '#BC188F': '#fff')};
        opacity: 0;
        transition: .6s ease-in;
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
        margin-top: ${({deckTop}) => (!deckTop && '25px')};
    }
    .leave-request{
        border: 1px solid;
        font-size: 16px;
        padding: 7px 18px;
        border-radius: 18px;
        ${navLinkStyles}
        margin: 0 5px;
        text-transform: uppercase;
        margin-top: ${({deckTop}) => (!deckTop && '25px')};
    }
    li{
        margin-top: ${({deckTop}) => (!deckTop && '25px')};
        font-size: ${({deckTop}) => (!deckTop && '20px')};
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
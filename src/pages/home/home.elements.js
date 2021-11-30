import styled, { createGlobalStyle, keyframes } from "styled-components";
import aboutBg from '../../assets/bg.jpg'
import imgText from '../../assets/img1.png'

export const HomeWrapper = styled.div`

    @media(min-width: 1200px){
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
    }
`

export const Header = styled.div` 
    height: 100vh;
    scroll-snap-align: start;
    background: linear-gradient(to right, #00091F, #00091F);
    position: relative;
    overflow: hidden;
`
export const Services = styled.div`
    height: 100vh;
    scroll-snap-align: start;
    background-color: blue;
`

export const Contact = styled.div`
    height: 100vh;
    scroll-snap-align: start;
    background-color: green;
`

const animate = keyframes`
    from{
        background-position: 0%;
    }
    to{
        background-position: 500%;
    }
`

export const HeaderTextBox = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Ubuntu:ital,wght@1,500&display=swap');

    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    h1{
        background: linear-gradient(90deg, #BB188E, #00091F, #EDB01B, #00091F, #0095BB);
        background-size: 500%;
        font-size: 130px;
        font-family: 'Roboto', sans-serif;
        font-family: 'Ubuntu', sans-serif;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        animation: ${animate} 15s linear infinite;
        letter-spacing: 5px;

        @media(max-width: 750px){
            font-size: 80px;
        }
        @media(max-width: 500px){
            font-size: 50px;
        }
    }
    h2{
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-family: 'Ubuntu', sans-serif;
        font-size: 38px;
        @media(max-width: 750px){
            font-size: 20px;
        }
    }
` 

const chevronMove = keyframes`
    25% {
        opacity: 1;
    }
    33% {
        opacity: 1;
        transform: translateY(30px);
    }
    67% {
        opacity: 1;
        transform: translateY(40px);
    }
    100% {
        opacity: 0;
        transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
`

export const ChevronsAnim = styled.div`
    position: absolute;
    bottom: 75px;
    left: 50%;
    transform: translateX(-50%);
    .chevrons_container{
        position: relative;
        width: 24px;
        height: 24px;
        margin: 0 auto;
        div{
            position: absolute;
            width: 28px;
            height: 8px;
            opacity: 0;
            transform: scale3d(0.5, 0.5, 0.5);
            animation: move 3s ease-out infinite;
            :before, :after{
                content: ' ';
                position: absolute;
                top: 0;
                height: 100%;
                width: 51%;
                background: #fff;
            }
            :before {
                left: 0;
                transform: skew(0deg, 30deg);
            }

            :after {
                right: 0;
                width: 50%;
                transform: skew(0deg, -30deg);
            }
        }
        .chevron1{
            animation: ${chevronMove} 3s ease-out 1s infinite;
        }
        .chevron2{
            animation: ${chevronMove} 3s ease-out 2s infinite;
        }
    }
`
//  * -------====---- - -- - - -  - - -- - -- - - -  - - -- - -- - - -  - - -- - -- - - -  - -

// -------------- -- - - -- - - -- Header finished and about us started - -- - - - -- - - -- -----
const textAnimKey = keyframes`
    to{
        width: 300px;
        height: 300px;
    }
    from{
        width: 450px;
        height: 450px;
    }
`

export const AboutUs = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@700&family=Ubuntu:ital,wght@1,500&display=swap');
    
    height: 100vh;
    scroll-snap-align: start;
    background: url(${aboutBg});
    background-size: cover;
    background-position: center center;
    .left{
        background-image: url(${imgText});
            width: 300px;
            height: 300px;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            background-position: center center;
            animation: ${textAnimKey} 0.4s linear;
        h3{
            color: #fff;
            font-size: 24px;
            padding-left: 40px;
        }
    }
    .right{
        width: 500px;
        p{
            color: #fff;
            font-size: 30px;
            line-height: 65px;
            font-family: 'Montserrat', sans-serif;
            font-family: 'Roboto', sans-serif;
            font-family: 'Ubuntu', sans-serif;
        }
        button{
            color: #fff;
            border-color: transparent;
            border-left: 2px solid ${({theme}) => (theme.yellow)};
            border-right: 2px solid ${({theme}) => (theme.yellow)};
            text-transform: capitalize;
            font-family: sans-serif;
            padding: 10px 12px;
            font-size: 19px;
            font-weight: 600;
            margin-top: 30px;
            position: relative;
            cursor: pointer;
            :hover{
                :after{
                    width: 52%;
                }
                :before{
                    width: 52%;
                }
            }
            :after{
                transition: width 0.4s;
                content: '';
                position: absolute;
                top: -2px;
                right: -2px;
                height: 100%;
                width: 6px;
                border-top: 2px solid ${({theme}) => theme.yellow};
                border-bottom: 2px solid ${({theme}) => theme.yellow};
            }
            :before{
                transition: width 0.4s;
                content: '';
                position: absolute;
                top: -2px;
                left: -2px;
                height: 100%;
                width: 6px;
                border-top: 2px solid ${({theme}) => theme.yellow};
                border-bottom: 2px solid ${({theme}) => theme.yellow};
            }
            .fas{
                padding-left: 10px;
                font-size: 17px;
            }
        }
    }
`






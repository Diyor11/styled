import styled, { keyframes } from "styled-components";
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
            @media(max-width: 700px){
                display: none;
            }
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

export const AboutText = styled.p`
    color: #fff;
    font-size: 30px;
    line-height: 65px;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-family: 'Ubuntu', sans-serif;
    @media(max-width: 700px){
        font-size: 25px;
        line-height: 55px;
    }
    @media(max-width: 420px){
        line-height: 40px;
    }
`

export const Services = styled.div`
    height: 100vh;
    scroll-snap-align: start;
    position: relative;
    background-color: ${({theme}) => theme.blue};
    overflow: hidden;
    @media(max-width: 1000px){
        min-height: 1530px;
        
    }
    .cards{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding-top: 15vh;
        @media(max-width: 1000px){
            flex-direction: column;
        }
    }
`

export const Card = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@700&family=Ubuntu:ital,wght@1,500&display=swap');

    width: 267px;
    height: 379px;
    border: 1px solid transparent;
    text-align: center;
    color: #fff;
    margin: 30px;
    padding: 35px 5px 0;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0.2);
    position: relative;
    transition: 0.4s;
    @media(max-width: 1000px){
        width: auto;
    }
    .last{
        p{
            padding-top: 43px;
        }
    }
    :hover{
        color: ${({theme}) => theme.yellow};
        border-color: ${({theme}) => theme.yellow};
    }
    img{
        width: 140px;
        min-height: 90px;
    }
    p{
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Roboto', sans-serif;
        font-family: 'Ubuntu', sans-serif;
        line-height: 26px;
        padding-top: 20px;
    }
    a{
        font-size: 17px;
        padding-top: 55px;
        font-family: sans-serif;
        font-weight: 700;
        position: absolute;
        bottom: 35px;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const AnimaBtn = styled.button`
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
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 200px;
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
` 

export const Contact = styled.div`
    height: 100vh;
    scroll-snap-align: start;
    position: relative;
`
export const MapSection = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
`

export const ContactBox = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:ital,wght@0,700;1,700&family=Ubuntu:ital,wght@1,500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ubuntu:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    display: flex;
    align-items: center;
    background-color: rgba(4,12,39, 0.9);
    position: absolute;
    bottom: 10%;
    z-index: 6;
    left: 5%;
    @media(max-width: 440px){
        left: 0;
    }
    .info{
        padding: 30px;
        max-width: 340px;
        color: #fff;
        @media(max-width: 440px){
            padding: 15px;
        }
        h3{
            font-family: sans-serif;
            font-size: 25px;
            font-family: 'Montserrat', sans-serif;
            font-family: 'Roboto', sans-serif;
            font-family: 'Ubuntu', sans-serif;
        }
        p{
            font-size: 15px;
            padding-top: 35px;
            font-family: 'Montserrat', sans-serif;
            font-family: 'Ubuntu', sans-serif;
            line-height: 20px;
        }
        .location{
            font-size: 21px;
            font-family: 'Ubuntu', sans-serif;
            padding-top: 25px;
            line-height: 27px;
            @media(max-width: 380px){
                font-size: 18px;
            }
        }
        .phone{
            font-family: sans-serif;
            font-size: 19px;
            padding-top: 30px;
        }
        .social_medias{
            padding-top: 35px;
            display: flex;
            align-items: center;
            i{
                transition: .3s;
                padding: 15px 18px;
                border: 1px solid rgba(255, 255, 255, 0.3);
                margin: 0 10px;
                cursor: pointer;
                font-size: 18px;
                :hover{
                    border-color: ${({theme}) => theme.yellow};
                }
            }
        }
        .footer{
            padding-top: 20px;
            font-family: sans-serif;
            font-weight: 450;
            padding-top: 15px;
            font-size: 14px;
        }
    }
    .message{
        max-width: 340px;
        padding: 30px;
        @media(max-width: 850px){
            display: none;
        }
        input[type='text']{
            background: transparent;
            border-color: transparent;
            border-bottom: 1px solid #eee;
            margin: 8px 0;
            font-size: 16px;
            font-family: "Montserrat", sans-serif;
            padding: 13px 5px;
            width: 100%;
            color: #f3f3f3;
            letter-spacing: 1.5px;
            ::placeholder{
                color: #f3f3f3;
            }
        }
        .checkbox_group{
            padding-top: 30px;
            margin-bottom: 20px;
            span{
                display: block;
                padding: 5px 0;
            }
        }
    }
`

export const SendButton = styled.button`
    color: #fff;
    border-color: transparent;
    border-left: 2px solid ${({theme}) => (theme.yellow)};
    border-right: 2px solid ${({theme}) => (theme.yellow)};
    text-transform: capitalize;
    font-family: sans-serif;
    padding: 10px 12px;
    font-size: 19px;
    font-weight: 600;
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
`

export const AnimaCheckbox = styled.input` 
    position: relative;
    top: 0;
    width: 20px;
    height: 20px;
    -webkit-appearance: none;
    outline: none;
    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transition: .5s;
        width: ${({checked}) => (checked ? '10px':'100%')};
        height: 100%;
        border: 1.5px solid ${({theme}) => theme.yellow};
        border-left: ${({checked}) => (checked && 'none')};
        border-top: ${({checked}) => (checked && 'none')};
        transform: rotate(${({checked}) => (checked ? '45deg':'0')}) ;
    }
` 

export const CheckboxLabel = styled.label`
    font-size: 16px;
    color: #fff;
    font-family: sans-serif;
    padding-left: 10px;
    text-transform: capitalize;
`

export const Footer = styled.div` 
    padding: 15px 0;
    background-color: ${({theme}) => theme.blue};
    display: none;
    @media(max-width: 850px){
        display: block;
    }
    .icons{
        display: flex;
        align-items: center;
        @media(max-width: 570px){
            display: none;
        }
        i{
            transition: .3s;
            padding: 15px 18px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: #fff;
            margin: 0 10px;
            cursor: pointer;
            font-size: 18px;
        }
    }
    .underTitle{
        display: block;
        text-align: center;
        color: #fff;
        padding-top: 10px;
        font-size: 17px;
    }
`



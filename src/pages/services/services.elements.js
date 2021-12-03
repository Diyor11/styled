import styled from "styled-components";

export const FacePage = styled.div` 
    height: 100vh;
    background-color: ${({theme}) => theme.blue};
    overflow: hidden;
`

export const MainText = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
    font-family: 'Roboto', sans-serif;
    width: fit-content;
    margin: 25vh auto 0;
    .hero_content_bg{
        text-align: center;
        color: rgba(26,34,54,255);
        h1{
            font-size: 110px;
            transform: translateY(50%)
        }
    }
    .hero_content{
        color: #fff;
        h1{
            text-align: center;
            font-size: 50px;
            transform: translateY(-40%)
        }
    }
`

export const FaceBody = styled.div` 
    min-height: 100vh;
    background-color: #fff;
`

export const HeroTextBox = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    display: block;
    text-align: center;
    padding-top: 40px;
    .title{
        font-family: 'Roboto', sans-serif;
        color: #000;
        font-size: 34px;
    }
    .body{
        padding-top: 25px;
        font-family: 'Roboto', sans-serif;
        color: #777;
        font-size: 19px;
        font-weight: 400;
        line-height: 28px;
    }
`

export const CardsWrapper = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 30px 0;
    grid-gap: 20px;
`

export const Card = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

    width: 100%;
    height: 400px;
    position: relative;
    transform-style: preserve-3d;
    cursor: pointer;
    :hover{
        .front{
            transform: perspective(500px) rotateY(180deg); 
        }
        .back{
            transform: perspective(500px) rotateY(360deg); 
        }
    }
    .face{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        transition: 1.3s ease-in-out;
        transform: perspective(500px) rotateY(0deg); 
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        .text{
            transform: perspective(500px) translateZ(50px); 
            font-family: 'Open-sans', sans-serif;
            color: #fff;
            text-align: center;
            .title{
                font-size: 23px;
            }
            .line{
                width: 60px;
                margin: 14px auto;
                background-color: #fff;
                height: 3px;
            }
            .price{
                font-size: 20px;
            }
            .commant{
                font-size: 18px;
                line-height: 18px;
                width: 70%;
                margin: 0 auto;
            }
        }
    }
    .front{
        background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), ${({img}) => img || '#333'};
    }
    .back{
        background: ${({theme}) => theme.blue};
        transform: perspective(500px) rotateY(180deg); 
    }
`

export const EndText = styled.div` 
    text-align: center;
    font-size: 21px;
    color: #777;
    line-height: 23px;
    padding-top: 55px;
    font-family: sans-serif;
    font-weight: 600;
`
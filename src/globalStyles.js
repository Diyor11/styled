import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'


export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
    ::-webkit-scrollbar {
        width: 0px;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    li{
        list-style-type: none;
    }
    input{
        outline: none;
    }
    img{
        width: 100%;
    }
    button{
        outline: none;
        background: transparent;
    }
`

export const Container = styled.div`
    display: ${({d}) => d || 'flex'};
    align-items: center;
    height: ${({h}) => (h ? '100%': '')};
    justify-content: ${({jc}) => (jc ? jc:'')};
    align-items: ${({ai}) => (ai && ai)};
    @media(min-width: 576px){
        max-width: 540px;
    }
    @media(min-width: 768px){
        max-width: 720px;
    }
    @media(min-width: 992px){
        max-width: 960px;
    }
    @media(min-width: 1200px){
        max-width: 1140px;
    }
    padding-left: 12px;
    padding-right: 12px;
    margin-right: auto;
    margin-left: auto;
`
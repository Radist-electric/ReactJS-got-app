import React from 'react';
import styled from 'styled-components';
// import './errorMessage.css';
import img404 from './error404.png';
import imgFatal from './errorFatal.jpg';

const ErrorBlock = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    img {
        max-height: 250px;
        max-width: 100%;
    }
    span {
        display: block;
        margin-top: 5px;
        height: 35px;
        width: 100%;
        background-color: #051218;
        border-radius: 5px;
        line-height: 35px;
        color: #fff
    }
`


const ErrorMessage = ({typeError}) => {
    const showErrorFatal = (typeError ==="fatal") ? <ErrorFatal/> : null;
    const showError404 = (typeError ==="404") ? <Error404/> : null;
    return (
        <ErrorBlock>
            {showErrorFatal}
            {showError404}
        </ErrorBlock>
    )
}

const ErrorFatal = () => {
    return (
        <>
        <img src={imgFatal} alt='FatalError'></img>
        <span>Что-то пошло не так</span>
        </>
    )
}
const Error404 = () => {
    return (
        <>
        <img src={img404} alt='Error'></img>
        <span>Персонаж не найден (error 404)</span>
        </>
    )
}

export default ErrorMessage;
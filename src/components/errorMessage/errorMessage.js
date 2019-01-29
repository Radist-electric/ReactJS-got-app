import React from 'react';
import styled from 'styled-components';
// import './errorMessage.css';
import img404 from './error404.png';

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


const ErrorMessage = () => {
    return (
        <ErrorBlock>
            {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error' className="random-block"></img> */}
            <img src={img404} alt='error'></img>
            <span>Персонаж не найден (error 404)</span>
        </ErrorBlock>
    )
}

export default ErrorMessage;
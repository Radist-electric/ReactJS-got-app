import React from 'react';
import bookImage from './bookImage.jpg';
import styled from 'styled-components';

const ImageBlock = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    text-align: center;
    img {
        max-height: 300px;
        max-width: 100%;
    }
    span {
        position: absolute;
        top: 0;
        left: 50%;
        font-size: 40px;
        transform: translateX(-50%);
        color: #fff;
    }
`

const BookImage = ({itemId}) => {
    console.log(itemId);
    return (
        <ImageBlock>
            <img src={bookImage} alt='Book'></img>
            <span>Book-{itemId}</span>
        </ImageBlock>
    )
}

export default BookImage;
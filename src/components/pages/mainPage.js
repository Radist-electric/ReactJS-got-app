import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import mainImage from './mainImg.jpg';

const Title = styled.h1`
    width:100%;
    text-align: center;
    color: #fff;

`
const Content = styled.p`
    height: 100%;
    padding: 20px;
    background-color: #fff;
    opacity: 0.5;
    text-align: justify;
    color: #000;
    font-weight: 900;
`
const ImageBlock = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    img {
        max-height: 100%;
        max-width: 100%;
    }

`


const MainContent = () => {
    return (
        <>
            <Row>
                <Title>Welcome to the Game Of Thrones Data Base</Title>
            </Row>
            <Row>
                <Col lg='6'>
                    <Content className="rounded">Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. 
                        The series is based on the A Song of Ice and Fire novels by author George R. R. Martin. 
                        The series takes place on the fictional continents of Westeros and Essos and chronicles 
                        the power struggles among noble families as they fight for control of the Iron Throne of the Seven Kingdoms. 
                        The series starts when House Stark, led by Lord Eddard "Ned" Stark (Sean Bean) is drawn into schemes against 
                        King Robert Baratheon (Mark Addy) when the Hand of the King Jon Arryn (Robert's chief advisor) dies mysteriously.</Content>
                </Col>
                <Col lg='6'>
                    <ImageBlock>
                        <img src={mainImage} alt='Game Of Thrones' className="rounded"></img>
                    </ImageBlock>
                </Col>
            </Row>
        </>
    )
}

export default MainContent;
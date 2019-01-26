import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';



const App = () => {
    const got = new GotService();
    got.getAll('characters')
        .then(res => console.log(res))
    got.getOne('characters', 10)
        .then(res => console.log(res));
    got.getAll('books')
        .then(res => console.log(res))
    got.getOne('books', 10)
        .then(res => console.log(res));
    got.getAll('houses')
        .then(res => console.log(res))
    got.getOne('houses', 10)
        .then(res => console.log(res));

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
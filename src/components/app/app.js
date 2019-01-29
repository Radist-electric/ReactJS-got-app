import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
// import GotService from '../../services/gotService';



export default class App extends Component {
    state = {
        switchRandomChar: true
    }
    removeRandomChar = () => {
         this.setState({switchRandomChar : !this.state.switchRandomChar})
    }
    
    render() {
        const showrandomChar = this.state.switchRandomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {showrandomChar}
                        </Col>
                        <Col lg={{size: 6}}>
                            <Button
                                outline
                                color="secondary"
                                onClick={this.removeRandomChar}
                                style={{ marginBottom: '300px' }}
                            >Remove character</Button>
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
    }

};


import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';



export default class App extends Component {
    state = {
        switchRandomChar: true,
        fatalError: false
    }
    componentDidCatch() {
        this.setState({
            fatalError: true
        })
    }
    toggleRandomChar = () => {
         this.setState({switchRandomChar : !this.state.switchRandomChar})
    }
    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    
    render() {
        const showrandomChar = this.state.switchRandomChar ? <RandomChar/> : null;
        if(this.state.fatalError) {
            return <ErrorMessage typeError="fatal"/>
        }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 6, offset: 0}}>
                            {showrandomChar}
                        </Col>
                        <Col lg={{size: 5}}>
                            <Button
                                outline
                                color="secondary"
                                onClick={this.toggleRandomChar}
                                style={{ marginBottom: '300px' }}
                            >Remove character</Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }

};


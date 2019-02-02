import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharactersPage from '../pages/сharactersPage';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage';
// import ItemList from '../itemList';
// import ItemDetails from '../itemDetails';
import GotService from '../../services/gotService';



export default class App extends Component {
    gotService = new GotService();
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
    onItemSelected = (id) => {
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
                    <CharactersPage/>
                    <BooksPage/>
                    <HousesPage/>
                </Container>
            </>
        );
    }

};


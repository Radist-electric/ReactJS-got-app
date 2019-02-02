import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import RandomItem from '../randomItems';
import ErrorMessage from '../errorMessage';
import {CharactersPage, BooksPage, HousesPage} from '../pages';
import GotService from '../../services/gotService';



export default class App extends Component {
    gotService = new GotService();
    state = {
        fatalError: false
    }
    componentDidCatch() {
        this.setState({
            fatalError: true
        })
    }

    render() {
        if(this.state.fatalError) {
            return <ErrorMessage typeError="fatal"/>
        }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <RandomItem/>
                    <CharactersPage/>
                    <BooksPage/>
                    <HousesPage/>
                </Container>
            </>
        );
    }

};


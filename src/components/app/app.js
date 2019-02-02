import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import RandomItem from '../randomItems';
import ErrorMessage from '../errorMessage';
import {CharactersPage, BooksPage, HousesPage, BooksItem} from '../pages';
import GotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';



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
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Route path='/' exact component={() => <h1>Welcome to Game Of Thrones Data Base</h1>}/>
                        <Route path='/' exact component={RandomItem}/>
                        <Route path='/characters' component={CharactersPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                            return <BooksItem bookId={id}/>}
                            }/>
                    </Container>
                </div>
            </Router>
        );
    }

};


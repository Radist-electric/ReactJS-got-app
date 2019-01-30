import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends  Component {
    state = {
        selectedChar: null,
        fatalError: false 
    }
    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    componentDidCatch() {
        console.log('catch');
        this.setState({
            fatalError: true
        })
    }

    render() {
        if(this.state.fatalError) {
            return <ErrorMessage typeError="fatal"/>
        }
        return (
            <Row>
            <Col md='6'>
                <ItemList onCharSelected={this.onCharSelected}/>
            </Col>
            <Col md='6'>
                <CharDetails charId={this.state.selectedChar}/>
            </Col>
        </Row>
        )
    }
}
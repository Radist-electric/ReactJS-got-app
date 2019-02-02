import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock'


export default class BooksPage extends  Component {
    gotService = new GotService();
    state = {
        selectedBook: null,
        fatalError: false 
    }
    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
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

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name, numberOfPages}) => `${name} (${numberOfPages})`}/>
        )
        const bookDetails = (
            <ItemDetails
                itemId={this.state.selectedBook}
                getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>

        )

        return (
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }
}
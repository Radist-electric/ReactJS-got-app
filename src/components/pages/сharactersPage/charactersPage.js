import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock'


export default class CharactersPage extends  Component {
    gotService = new GotService();
    state = {
        selectedChar: null,
        fatalError: false 
    }
    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
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
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        )
        const charDetails = (
            <ItemDetails
                itemId={this.state.selectedChar}
                getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>

        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}
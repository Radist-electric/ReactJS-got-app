import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import GotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';
import BookImage from '../itemImages';

export default class BooksItem extends Component {
    gotService = new GotService();

    render() {
        return (
            <Row>
            <Col lg={{size: 8, offset: 0}}>
                <ItemDetails
                    typeOfItem ='book'
                    itemId={this.props.bookId}
                    getData={this.gotService.getBook}>
                    <Field field='numberOfPages' label='Number Of Pages'/>
                    <Field field='publisher' label='Publisher'/>
                    <Field field='released' label='Released'/>
                    <Field field='country' label='Country'/>
                </ItemDetails>
            </Col>
            <Col lg={{size: 4}}>
                <BookImage itemId={this.props.bookId}/>
            </Col>
        </Row>
        )
    }

}
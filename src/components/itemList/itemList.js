import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
export default class ItemList extends Component {
    gotService = new GotService();
    state = {
        charList: null
    }
    componentDidMount() {
         this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
            // this.foo.bar = 0;
    }
    renderItems(arr) {
        return arr.map((item) => {
            let id = item.url.join('');
            return (
                <ListGroupItem
                key={id}
                onClick={() => this.props.onCharSelected(id)}
                >
                    {item.name}
                </ListGroupItem>
                
            )
        })
    }

    render() {
        const {charList} = this.state;
        if(!charList) {
            return (
                <ListGroup>
                    <ListGroupItem>
                    <Spinner/>
                    </ListGroupItem>
                </ListGroup>
            ) 
        }
        const items = this.renderItems(charList);
        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}
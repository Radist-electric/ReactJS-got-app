import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class ItemList extends Component {
    state = {
        itemList: null,
        fatalError: false
    }
    componentDidMount() {
        const {getData} = this.props;
         getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }
    componentDidCatch() {
        this.setState({
            fatalError: true
        })
    }
     renderItems(arr) {
        return arr.map((item) => {
            const id = item.url.join('');
            const label = this.props.renderItem(item);
            // this.foo.bar = 0;
            return (
                <ListGroupItem
                key={id}
                onClick={() => this.props.onItemSelected(id)}
                >
                    {label}
                </ListGroupItem>
             )
        })
    }

    render() {
        if(this.state.fatalError) {
            return <ErrorMessage typeError="fatal"/>
        }
        const {itemList} = this.state;
        if(!itemList) {
            return (
                <ListGroup>
                    <ListGroupItem>
                    <Spinner/>
                    </ListGroupItem>
                </ListGroup>
            ) 
        }
        const items = this.renderItems(itemList);
        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}
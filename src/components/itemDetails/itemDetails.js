import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export {
    Field
}

const DetailsBlock = styled.div`
    background-color: #fff;
    padding: 15px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`
const SelectItem = styled.div`
    font-size: 24px;
    line-height: 24px;
    text-align: center;
`
export default class ItemDetails extends Component {
    gotService = new GotService();
    state = {
        item: null,
        loading: false,
        fatalError: false
    }

    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.setState({
                loading: true
            })
            this.updateItem();
        }
    }
    componentDidCatch() {
        this.setState({
            fatalError: true
        })
    }
    onItemLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }
    updateItem() {
        const {itemId} = this.props;
        if(!itemId) {
            return
        }
        const {getData} = this.props;
        getData(itemId)
            .then(this.onItemLoaded)
        // this.foo.bar = 0;
    }

    render() {
        if(this.state.fatalError) {
            return <ErrorMessage typeError="fatal"/>
        }
        if(!this.state.item && this.props.typeOfItem !== 'book') {
            return (
                <DetailsBlock className="rounded">
                    <SelectItem>Please, select a character</SelectItem>
                </DetailsBlock>
            )
        }
        const { item, loading } = this.state;
        if(loading || (!this.state.item && this.props.typeOfItem === 'book')) {
            return (
                <DetailsBlock className="rounded">
                    <Spinner/>
                </DetailsBlock>
            )
        }
        const {name} = item;
        return (
            <DetailsBlock className="rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return (
                                React.cloneElement(child, {item})
                            )
                        })
                    }
                </ul>
            </DetailsBlock>
        );
    }
}

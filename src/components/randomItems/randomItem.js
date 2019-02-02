import React, {Component} from 'react';
import {Col, Row, Button} from 'reactstrap';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const RandomBlock = styled.div`
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    background-color: #fff;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`
export default class RandomItem extends Component {
    gotService = new GotService();
    state = {
        char: {},
        switchRandomItem: true,
        loading: true,
        error: false,
        fatalError: false
    }
    
    componentDidMount() {
        this.updateItem();
        this.timerId = setInterval(this.updateItem, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    componentDidCatch() {
        this.setState({
            fatalError: true
        })
    }
    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
        clearInterval(this.timerId);
    }

    updateItem = () => {
        // const id = 150000;
        const id = Math.floor(Math.random()*140+25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }
    toggleRandomItem = () => {
        this.setState({switchRandomItem : !this.state.switchRandomItem})
   }

    render() {
        if(this.state.fatalError) {
            return <ErrorMessage typeError="fatal"/>
        }
        const { char, loading, error } = this.state;
        const content = !(loading || error) ? <View char={char}/> : null;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage typeError="404"/> : null;
        const showrandomItem = this.state.switchRandomItem ?
            <RandomBlock className="rounded">
                {errorMessage}
                {content}
                {spinner}
            </RandomBlock> : null;
        return (
            <Row>
            <Col lg={{size: 6, offset: 0}}>
                {showrandomItem}
            </Col>
            <Col lg={{size: 5}}>
                <Button
                    outline
                    color="secondary"
                    onClick={this.toggleRandomItem}
                    style={{ marginBottom: '300px' }}
                >Remove character</Button>
            </Col>
        </Row>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const DetailsBlock = styled.div`
    background-color: #fff;
    padding: 15px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`
const SelectChar = styled.div`
    font-size: 24px;
    line-height: 24px;
    text-align: center;
`
export default class CharDetails extends Component {
    gotService = new GotService();
    state = {
        char: null,
        loading: null,
        fatalError: false
    }

    componentDidMount() {
        this.updateChar();
    }
    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId) {
            this.setState({
                loading: true
            })
            this.updateChar();
        }
    }
    componentDidCatch() {
        console.log('catch');
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
    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return
        }
        this.gotService.getCharacter(charId)
            .then(this.onCharLoaded)
        // this.foo.bar = 0;
    }

    render() {
        if(this.state.fatalError) {
            return <ErrorMessage typeError="fatal"/>
        }
        const { char, loading } = this.state;
        const content = loading ? <Spinner/> : <View char={char}/>;
        if(!char) {
            return (
                <DetailsBlock className="rounded">
                    <SelectChar>Пожалуйста, выберите персонажа.</SelectChar>
                </DetailsBlock>
            )
        }
        return (
            <DetailsBlock className="rounded">
                {content}
            </DetailsBlock>
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
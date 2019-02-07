import React from 'react';
import CharactersPage from './charactersPage';
import ItemList from '../itemList';
import {shallow} from 'enzyme';

describe('Testing <CharactersPage/>', () => {
    const character = shallow(<CharactersPage/>);
    describe('Testing snap & state', () => {
        it('CharactersPage has rendered correctly', () => {
            expect(character).toMatchSnapshot();
        });
        it('CharactersPage state "selectedChar" is null', () => {
            expect(character.state().selectedChar).toBeNil();
        });
        it('CharactersPage state "fatalError" is false', () => {
            expect(character.state().fatalError).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('Testing onItemSelected', () => {
            character.instance().onItemSelected(<ItemList onItemSelected={'10'}/>);
            expect(character.state().selectedChar).toBeObject();
        });
    });
});
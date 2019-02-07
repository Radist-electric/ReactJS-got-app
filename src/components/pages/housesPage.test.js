import React from 'react';
import HousesPage from './housesPage';
import ItemList from '../itemList';
import {shallow} from 'enzyme';

describe('Testing <BooksPage/>', () => {
    const houses = shallow(<HousesPage/>);
    describe('Testing snap & state', () => {
        it('HousesPage has rendered correctly', () => {
            expect(houses).toMatchSnapshot();
        });
        it('BooksPage state "selectedHouse" is null', () => {
            expect(houses.state().selectedHouse).toBeNil();
        });
        it('BooksPage state "fatalError" is false', () => {
            expect(houses.state().fatalError).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('Testing onItemSelected', () => {
            houses.instance().onItemSelected(<ItemList onItemSelected={'10'}/>);
            expect(houses.state().selectedHouse).toBeObject();
        });
    });
});
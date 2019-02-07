import React from 'react';
import ItemDetails from './itemDetails';
import {shallow} from 'enzyme';

describe('Testing <ItemDetails/>', () => {
    const item = shallow(<ItemDetails/>);
    describe('Testing snap & state', () => {
        it('ItemDetails has rendered correctly', () => {
            expect(item).toMatchSnapshot();
        });
        it('ItemDetails state "item" is null', () => {
            expect(item.state().item).toBeNil();
        });
        it('ItemDetails state "loading" is false', () => {
            expect(item.state().loading).toBeFalsy();
        });
        it('ItemDetails state "fatalError" is false', () => {
            expect(item.state().fatalError).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('Testing onItemLoaded', () => {
            item.instance().onItemLoaded();
            expect(item.state().loading).toBeFalsy();
        });
    });
});
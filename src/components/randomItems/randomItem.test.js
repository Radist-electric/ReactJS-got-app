import React from 'react';
import RandomItem from './randomItem';
import ErrorMessage from '../errorMessage';
import {shallow} from 'enzyme';

describe('Testing <RandomItem/>', () => {
    const char = shallow(<RandomItem/>);
    describe('Testing snap & state', () => {
        it('RandomItem has rendered correctly', () => {
            expect(char).toMatchSnapshot();
        });
        it('RandomItem state "char" is emtpy object', () => {
            expect(char.state().char).toBeObject();
        });
        it('RandomItem state "loading" is true', () => {
            expect(char.state().loading).toBeTruthy();
        });
        it('RandomItem state "error" is false', () => {
            expect(char.state().error).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('Testing onCharLoaded', () => {
            char.instance().onCharLoaded();
            expect(char.state().loading).toBeFalsy();
        });
        it('Testing updateItem', () => {
            char.instance().updateItem();
            expect(char.state().loading).toBeFalsy();
        });
        it('Testing onError', () => {
            char.instance().onError(<ErrorMessage typeError={'404'}/>);
            expect(char.state().loading).toBeFalsy();
            expect(char.state().error).toBeTruthy();
        });
    });
});

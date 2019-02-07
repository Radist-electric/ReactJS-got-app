import React from 'react';
import BooksPage from './booksPage';
import {shallow} from 'enzyme';

describe('Testing <BooksPage/>', () => {
    const books = shallow(<BooksPage/>);
    describe('Testing snap & state', () => {
        it('BooksPage has rendered correctly', () => {
            expect(books).toMatchSnapshot();
        });
    });
});
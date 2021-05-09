import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from '../component/Algolia/Algolia';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme';

describe('input value', () => {
    const initialState = { isSearching: false }
    const mockStore = configureStore();
    let store;
    test('search result', () => {
        store = mockStore(initialState);
        render(<Provider store={store}><List/></Provider>);
        const searchResult = screen.getByTestId("searchResult");
        expect(searchResult).toBeInTheDocument();
    })

})

describe('list length', () => {
    const initialState = { isSearching: false }
    const mockStore = configureStore();
    let store = mockStore(initialState);
    let list = [];
    const component = mount(<Provider store={store}><List list={list}/></Provider>); 
    test('list length', () => {
        expect(component.find('#list').children().length).toBe(list.length);
    })
})
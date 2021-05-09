import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from '../component/Algolia/Algolia';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

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

    // test('data list', () => {
    //     store = mockStore(initialState);
    //     render(<Provider store={store}><List/></Provider>);
    //     const dataList = screen.getByTestId("dataList");
    //     expect(dataList).toBeInTheDocument();
    // })

})
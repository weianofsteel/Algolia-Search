import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Algolia from '../component/Algolia/Algolia';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('input value', () => {
    const initialState = { isSearching: false }
    const mockStore = configureStore();
    let store;
    test('updates on change', () => {
        store = mockStore(initialState);
        render(<Provider store={store}><Algolia/></Provider>);
        const searchInput = screen.getByTestId("searchInput");
        expect(searchInput).toBeInTheDocument();
    })
})
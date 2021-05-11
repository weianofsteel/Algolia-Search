import { actionTypes, reducer } from '../store'

describe('redux', () => {
    test('dispatch when start searching', () => {
        const initialState = {
            isSearching: false
        }
        const expectedAction = {
            isSearching: true
          }
        expect(reducer(initialState, {type: actionTypes.STARTSEARCHING})).toEqual(expectedAction);
    })

    test('dispatch when finish searching', () => {
        const initialState = {
            isSearching: true
        }
        const expectedAction = {
            isSearching: false
          }
        expect(reducer(initialState, {type: actionTypes.FINISHSEARCHING})).toEqual(expectedAction);
    })
})
import { combineReducers } from 'redux'
import scaleModalReducer from './reducers/scale'

const initialState = {}

function reducer(state = initialState, action) {
    return state
}

export default combineReducers({ reducer, scaleModalReducer })

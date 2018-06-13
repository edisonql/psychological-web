import { combineReducers } from 'redux'
import scaleModalReducer from './reducers/scale'

const initialState = {
  name:'111',
  pwd:'222',
}

function reducer(state = initialState, action) {
    return state
}

export default combineReducers({ reducer, scaleModalReducer })

import { combineReducers } from 'redux'

const initialState = {
  name:'111',
  pwd:'222',
}

function reducer(state = initialState, action) {
    return state
}

export default combineReducers({reducer})

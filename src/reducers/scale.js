const initialState = { scaleData: {} }

const scaleModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SCALE_DATA':
            return {
                ...state,
                scaleData: action.data,
                categoryKeys: action.categoryKeys,
            }
        default:
            return state
    }
}

export default scaleModalReducer

const initialState = { scaleData: {} }

const scaleModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SCALE_DATA':
            return {
                ...state,
                scaleData: action.data,
                categoryKeys: action.categoryKeys,
            }
        case 'SET_PERSONAL_INFO':
            return {
                ...state,
                nickname: action.nickname,
                age: action.age,
                occupation: action.occupation,
                mobile: action.mobile,
            }
        default:
            return state
    }
}

export default scaleModalReducer

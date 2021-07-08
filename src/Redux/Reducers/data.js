const initialState = {
    sortBy: 'default',
    filterPrice: {
        min: 0,
        max: 30
    }
}

export const data = ( state = initialState, action)=>{
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        
        default:
            return state
    }
}
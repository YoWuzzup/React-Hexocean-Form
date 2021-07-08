export const setSortBy = (sortBy)=> async (dispatch) =>{
    try {
        dispatch({ type: 'SET_SORT_BY', payload: sortBy })
    } catch (error) {
        console.log(error.message);
    }
}
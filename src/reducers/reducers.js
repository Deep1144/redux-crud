const initialState = {
    list : [],
    currentIndex :-1
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH":
            // console.log(action.payload)
            return {
                currentIndex: -1,
                list :action.payload
            }

        case "UPDATE_INDEX":
            return {
                ...state,
                currentIndex : action.payload
            }
        default :
            return state;
    }

};



export default postReducer;
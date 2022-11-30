const initialState = {
    dishes: [],
    favourites: []
}

const MainReducer = (state = initialState, Action) => {
    switch (Action.type) {
        case 'GET_DISHES':
            return {
                ...state,
                dishes: Action.payload
            };
        case 'GET_FAVOURITES':
            return {
                ...state,
                favourites: state.favourites.concat(Action.payload)
            };
        case 'REMOVE_FAVOURITE':
            return {
                ...state,
                favourites: state.favourites.filter((item) => item.name !== Action.payload)
            };
        default:
            return state;
    }
};

export default MainReducer;
const MapDispatchToProps = (dispatch) => {
    return {

        getDishes: (data) => {
            dispatch({
                type: 'GET_DISHES',
                payload: data
            })
        },
        getFavourites: (data) => {
            dispatch({
                type: 'GET_FAVOURITES',
                payload: data
            })
        },
        removeFavourite: (data) => {
            dispatch({
                type: 'REMOVE_FAVOURITE',
                payload: data
            })
        },


    }
};

export default MapDispatchToProps;
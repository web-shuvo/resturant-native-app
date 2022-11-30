import { configureStore } from "@reduxjs/toolkit";
import MainReducer from './Reducers/MainReducer';

const Store = configureStore({
    reducer: {
        MainReducer,
    },
});

export default Store;
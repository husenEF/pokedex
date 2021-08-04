import { combineReducers, createStore } from "redux";

import CountReducer from "./count/reducer"

const rootReducer = combineReducers({
    count: CountReducer
})

const store = createStore(rootReducer)

export default store
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk"

import CountReducer from "./count/reducer"
import PokemonReducer from "./pokemon/reducer"

const rootReducer = combineReducers({
    count: CountReducer,
    pokemon: PokemonReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
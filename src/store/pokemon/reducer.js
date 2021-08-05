import { SET_DATA } from "./constant"

const initalState = {
    data: {},
    pagination: {
        next: "",
        prev: "",
        count: 0,
        limit: 100,
        offset: 20
    },
    error: null
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_DATA:
            // const data = action.value
            const { payload: { key, value } } = action
            return { ...state, [key]: { ...state[key], ...value } }
        default:
            return state
    }
}

export default reducer
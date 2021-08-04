import { SET_DATA } from "./constant"

const initalState = {
    data: [],
    pagination: {
        next: "",
        prev: "",
        count: 0
    },
    error: null
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_DATA:
            // const data = action.value
            const { payload: { key, value } } = action
            return { ...state, [key]: value }
        default:
            return state
    }
}

export default reducer
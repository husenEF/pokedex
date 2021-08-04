import { SET_DEC, SET_INC } from "./constan";

const intialState = {
    count: 0
}

const reducer = (state = intialState, action) => {
    console.log({ action });
    switch (action.type) {
        case SET_DEC:
            return { ...state, count: state.count - 1 }
        case SET_INC:
            return { ...state, count: state.count + 1 }
        default:
            return state;
    }
}

export default reducer
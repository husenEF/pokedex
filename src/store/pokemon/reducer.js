import { SET_DATA, SET_DETAIL } from "./constant";

const initalState = {
  data: {},
  pagination: {
    next: "",
    prev: "",
    count: 0,
    limit: 100,
    offset: 20,
  },
  error: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_DATA:
      // const data = action.value
      const {
        payload: { key, value },
      } = action;
      return { ...state, [key]: { ...state[key], ...value } };

    case SET_DETAIL:
      const { data } = state;
      const newData = Object.keys(data).map((e) => {
        const name = data[e].name;
        if (name === action.key) {
          const currentData = data.e;

          currentData.push({ detail: action.value });
        }
        
      });
      return state;
    default:
      return state;
  }
};

export default reducer;

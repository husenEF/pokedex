import Api from "../../service/api"
import { SET_DATA } from "./constant"

export const setData = (key, value) => {
    return { type: SET_DATA, payload: { key, value } }
}

export const getData = () => {

    return async (dispatch, getState) => {
        const { pokemon } = getState()
        const { pagination: {
            limit, offset
        } } = pokemon
        // console.log("getState", getState());
        Api.get("pokemon", {
            params: { limit, offset }
        }).then(res => {
            const { data: { count, next, previous, results } } = res
            console.log("pokemon here", pokemon.pagination);
            const pagination = {
                next,
                prev: previous,
                count
            }
            dispatch(setData("data", results))
            dispatch(setData("pagination", pagination))
        }).catch(e => {
            console.log("e", { e });
        }).finally(() => {
            console.log("final");
        })
    }
}

export const getDetail= (name)=>{
    return async (dispatch)=>{
        
    }
}
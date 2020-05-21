const initialState = {
    fandomArr: []
}

const GET_FANDOMS = 'GET_FANDOMS';

export function getFandoms(fandomObj){
    return {
        type: GET_FANDOMS,
        payload: fandomObj
    }
}

export default function fandomReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_FANDOMS:
            return {...state, fandomArr: payload};
        default: 
            return state;
    }
}
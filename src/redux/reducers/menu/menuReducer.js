import { updateObject } from "../../../utils/utils"
import { OPEN_SIDE_MENU, ADD_COUNT } from "../../actions/actionTypes"

const initialState = {
    isOpenMenu: false,
    counter: 0
}

const setMenuState = (state, action) =>{
    console.log(action);
    return updateObject(state, {
        isOpenMenu: action.openMenu
    })
}

export const menuReducer = (state = initialState, action) =>{
    switch(action.type){
        case OPEN_SIDE_MENU:
            return setMenuState(state, action)
        default: 
            return state
    }
}

const setAddCount = (state, action) =>{
    return updateObject(state,{
        counter: state.counter +1
    })
}

export const addCountReducer = ( state = initialState, action)=>{
    switch(action.type){
        case ADD_COUNT:
            return setAddCount(state, action)
        default:
            return state
    }
}
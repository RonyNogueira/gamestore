import { updateObject } from "../../../utils/utils"
import { OPEN_SIDE_MENU } from "../../actions/actionTypes"

const initialState = {
    isOpenMenu: false,
}

const setMenuState = (state, action) =>{
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
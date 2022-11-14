import * as actionTypes from '../actionTypes'

export const openSideMenu = (openMenu,banana) => {
    return {
        type: actionTypes.OPEN_SIDE_MENU,
        openMenu,
        banana
    }
}

export const counterAction = () =>{
    return {
        type: actionTypes.ADD_COUNT,
        
    }
}
import * as actionTypes from '../actionTypes'

export const openSideMenu = (openMenu) => {
    return {
        type: actionTypes.OPEN_SIDE_MENU,
        openMenu
    }
}
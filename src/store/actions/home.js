// Custom Imports
import { LOGIN_SUCCESS, MODAL_OPEN, MODAL_CLOSE } from './actionTypes'

// Action Creators
export const loginSuccess = () => {
    return {type: LOGIN_SUCCESS}
}

export const modalOpen = () => {
    return {type: MODAL_OPEN}
}

export const modalClose = () => {
    return {type: MODAL_CLOSE}
}
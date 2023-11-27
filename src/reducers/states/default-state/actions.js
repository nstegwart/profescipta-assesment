import { store } from "../../store"
import * as types from './types'

export const setTokenUser = (payload) => {
    store.dispatch({
        type: types.SET_USER_TOKEN,
        payload
    })
}

export const setListOrder = (payload) => {
    store.dispatch({
        type: types.SET_LIST_ORDER,
        payload
    })
}

export const setListItem = (payload) => {
    store.dispatch({
        type: types.SET_LIST_ITEM,
        payload
    })
}
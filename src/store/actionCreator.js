import {
    CHANGE_INPUT,
    ADD_LISTS,
    REMOVE_ITEM
} from './actionType'
export const getChangeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const getSubmitAction = (value) => ({
    type: ADD_LISTS,
    value
})

export const getRemoveItemAction = (index) => ({
    type: REMOVE_ITEM,
    index
})
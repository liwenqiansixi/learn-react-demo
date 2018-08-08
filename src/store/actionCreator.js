import {
    CHANGE_INPUT,
    ADD_LISTS,
    REMOVE_ITEM,
    GET_TODO_LIST
} from './actionType';
import axios from 'axios';
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

export const getTodoList = (data) => ({
    type: GET_TODO_LIST,
    data
})
// thunk中间件，action可以返回为一个函数，被接受。中间件处理函数为结果在dispatch传递给store
export const getAsyncTodoList = () => {
    return (dispatch)=> {
        axios.get('/api/list').then(res => {
            console.log(res.data)
            const action = getTodoList(res.data)
            dispatch(action)
        })
    }
}
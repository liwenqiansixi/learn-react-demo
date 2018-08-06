import { CHANGE_INPUT, ADD_LISTS, REMOVE_ITEM } from './actionType'

const defaultState = {
    placeHolder: '输入内容',
    inputVal: 'hhh',
    lists: []
};

export default (state = defaultState, actions) => {
    // 修改文本框中的内容时state跟着修改
    if(actions.type === CHANGE_INPUT){
        // 复制传入的state的内容进行修改
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = actions.value
        return newState
    }
    if(actions.type === ADD_LISTS) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.lists.push(newState.inputVal)
        newState.inputVal = ''
        return newState
    }
    if(actions.type === REMOVE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.lists.splice(actions.index, 1)
        return newState
    }
    return state
}
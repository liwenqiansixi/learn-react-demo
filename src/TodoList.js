import React, { Component } from 'react';
import { getChangeInputAction, getSubmitAction, getRemoveItemAction } from './store/actionCreator';
import TodoListUI from './TodoListUI';
import store from './store';
import axios from 'axios';
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        // 组件去订阅store，只要发生改变subscribt中的函数就会被自动执行
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <TodoListUI
                handleChangeInput={this.handleChangeInput}
                placeHolder={this.state.placeHolder}
                inputVal={this.state.inputVal}
                handleSubmit={this.handleSubmit}
                lists={this.state.lists}
                handleRemoveItem={this.handleRemoveItem} />
        )
    }
    componentDidMount() {
        axios.get('/api/list').then((res) => {console.log(res)})
    }
    handleChangeInput(e) {
        const action = getChangeInputAction(e.target.value)
        store.dispatch(action)
    }
    handleSubmit() {
        const action = getSubmitAction(store.getState().inputVal)
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleRemoveItem(index) {
        const action = getRemoveItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;